import { BackHandler } from "react-native";
import { AuthVal } from "@constants/enums";
import { SERVER_URL } from "@constants/proxy";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";
import store from "@store";
import { setAuth, setUnauth } from "@store/actions/auth";
import { connectUser, disconnectUser } from "@store/actions/user";
import { setJwt, unsetJwt } from "@store/actions/jwt";
import { Platform } from "react-native";

const isWeb = Platform.OS == "web";

export async function login(email: string, password: string) {
  const res = await axios.post(`${SERVER_URL}/api/login`, { email, password });
  if (res && res.status != 200) throw Error("Something went wrong");
  const { token } = res.data;
  await Promise.all([
    isWeb?localStorage.setItem("jwt", token):SecureStore.setItemAsync("jwt", token),
    store.dispatch(connectUser({ user: "test" })),
    store.dispatch(setJwt(token)),
  ]).catch(() => BackHandler.exitApp());
  store.dispatch(setAuth());
}

export async function logout() {
  await Promise.all([
    isWeb?localStorage.removeItem("jwt"):SecureStore.deleteItemAsync("jwt"),
    store.dispatch(disconnectUser()),
    store.dispatch(unsetJwt()),
  ]);
  store.dispatch(setUnauth());
}

export async function checkAuth() {
  let jwt;
    if (isWeb) {
      jwt = localStorage.getItem("jwt")
    }
    else {
      jwt = await SecureStore.getItemAsync("jwt");
    }
    if (jwt) {
      await Promise.all([
        store.dispatch(connectUser({ user: "test" })),
        store.dispatch(setJwt(jwt)),
      ]);
      store.dispatch(setAuth());
    } else {
      store.dispatch(setUnauth());
    }
}
