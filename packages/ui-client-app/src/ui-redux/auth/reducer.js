import * as actionTypes from "./actionTypes";

const token = localStorage.getItem("token");

const intialState = {
  authenticating: false,
  authenticated:false,
  authenticationFailed: false,
  token
};

const auth = (state = intialState, action) => {
  const { type } = action;

  switch (type) {
    case actionTypes.AUTHENTICATING:
      return { ...state, authenticated: false, authenticationFailed: true, authenticating: true };
    case actionTypes.AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        authenticationFailed: false,
        authenticating: false,
        token: action.accessToken,
      };
    case actionTypes.AUTHENTICATION_FAILED:
      return { ...state, authenticated: false, authenticationFailed: true, authenticating: false };
    case actionTypes.LOGOUT:
      return {
        ...state,
        authenticated: false,
        authenticationFailed: false,
        authenticating: false,
        token: "",
      };
    default:
      return state;
  }
};

export default auth;
