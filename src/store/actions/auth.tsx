export function setAuth(jwt: string) {
    return {
        type: "AUTHORIZE",
    }
}

export function setUnauth() {
    return {
        type: "UNAUTHORIZE"
    }
}