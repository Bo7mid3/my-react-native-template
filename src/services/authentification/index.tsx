import { AuthVal } from "@constants/enums";
import { SERVER_URL } from "@constants/proxy";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import jwt_decode from 'jwt-decode';
import store from "@store";
import { setAuth, setUnauth } from "@store/actions/auth";
import { connectUser, disconnectUser } from "@store/actions/user";
import { setJwt, unsetJwt } from "@store/actions/jwt";

export async function login(email: string, password: string) {
    const res = await axios.post(`${SERVER_URL}/api/login`, { email, password });
    if (res && res.status != 200)
        throw Error("Something went wrong");
    const { token } = res.data;
    SecureStore.setItemAsync("jwt", token);
    await store.dispatch(connectUser({user: "test"}));
    await store.dispatch(setJwt(token));
    store.dispatch(setAuth());
    return;
}

export async function logout() {
    await store.dispatch(disconnectUser());
    await store.dispatch(unsetJwt());
    store.dispatch(setUnauth());
}

export async function checkAuth() {
    let jwt = await SecureStore.getItemAsync("jwt");
    console.log("here")
    if (jwt) {
        await store.dispatch(connectUser({user: "test"}));
        await store.dispatch(setJwt(jwt));
        store.dispatch(setAuth());
    }
    else {
        store.dispatch(setUnauth());;
    }
    return;
}