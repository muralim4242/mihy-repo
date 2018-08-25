import * as authType from "./actionTypes";
import { toggleSnackbarAndSetText } from "../app/actions";
import get from "lodash/get";


export const authenticating = () => {
  return { type: authType.AUTHENTICATING };
};

export const authenticated = (payload = {}) => {
  const userInfo = fixUserDob(payload["UserRequest"]);
  const accessToken = payload.access_token;
  const refreshToken = payload.refresh_token;
  const expiresIn = payload.expires_in;
  const lastLoginTime = new Date().getTime();

  localStorage.setItem("user-info", JSON.stringify(userInfo));
  localStorage.setItem("token", accessToken);
  localStorage.setItem("refresh-token", refreshToken);
  localStorage.setItem("expires-in", expiresIn);
  localStorage.setItem("tenant-id", userInfo.tenantId);
  localStorage.setItem("last-login-time", lastLoginTime);

  return { type: authType.AUTHENTICATED, userInfo, accessToken };
};

export const authenticationFailed = () => {
  return { type: authType.AUTHENTICATION_FAILED };
};
