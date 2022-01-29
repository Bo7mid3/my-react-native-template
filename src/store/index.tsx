import jwtReducer from './reducers/jwtReducer';
import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import authReducer from './reducers/authReducer';

const topReducer = combineReducers({ user: userReducer, jwt: jwtReducer, auth: authReducer });
const appStore = createStore(topReducer);

export default appStore;