import { USER } from "@constants/interfaces";

export default (state: USER | null = null, action: { type: string, payload?: USER }) => {
    switch (action.type) {
        case "CONNECT_USER":
            return action.payload;
        case "DISCONNECT_USER":
            return null;
        default:
            return state;
    }
}