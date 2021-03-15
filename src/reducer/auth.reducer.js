import {
  AUTH_START,
  AUTH_SIGNIN,
  AUTH_SIGNUP,
  AUTH_SIGNOUT,
  AUTH_END,} from "../constant/auth.constant";

const initialState = {
  user: null,
  loading: false,
  isLoggedIn: false
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case AUTH_END:
      return {
        ...state,
        loading: false,
      };
    case AUTH_SIGNIN:
      return {
        ...state,
        AUTH: payload,
        isLoggedIn: true,
        loading: false
      };
    case AUTH_SIGNUP:
      return {
        ...state,
        AUTH: payload,
        isLoggedIn: true,
        loading: false
      };
    case AUTH_SIGNOUT:
      return {
        ...state,
        AUTH: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
