import { AuthVal } from '@constants/enums';

export default (state = AuthVal.Loading, action: { type: string }) => {
    switch (action.type) {
        case "AUTHORIZE":
            return AuthVal.LoggedIn;
        case "UNAUTHORIZE":
            return AuthVal.LoggedOut;
        default:
            return state;
    }
};
