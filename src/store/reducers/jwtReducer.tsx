export default (state = null, action: { type: string, payload: string }) => {
    switch (action.type) {
        case "SET_JWT":
            return action.payload;
        case "UNSET_JWT":
            return null;
        default:
            return state;
    }
};
