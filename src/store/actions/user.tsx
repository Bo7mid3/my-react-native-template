import { USER } from "@constants/interfaces";

export function connectUser(user: USER) {
    return {
        type: "CONNECT_USER",
        payload: user
    }
}

export function disconnectUser() {
    return {
        type: "DICONNECT_USER"
    }
}