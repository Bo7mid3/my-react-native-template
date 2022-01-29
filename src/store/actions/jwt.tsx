export function setJwt(jwt: string) {
    return {
        type: "SET_JWT",
        payload: jwt
    }
}

export function unsetJwt() {
    return {
        type: "UNSET_USER"
    }
}