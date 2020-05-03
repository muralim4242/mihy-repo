import axios from "axios";
import { addQueryArg } from "./commons";
import { prepareFinalObject } from "../ui-redux/screen-configuration/actions";
import store from "../ui-redux/store";

const getToken = () => {
  const userInfo = JSON.parse(localStorage.getItem("user-info")) || {};
  return userInfo.token;
};

let axiosInstances = {
  instanceOne: axios.create({
    baseURL: "https://api.covid19india.org",
    // window.location.origin,
    headers: {
      "Content-Type": "application/json"
    }
  }),
  instanceTwo: axios.create({
    baseURL: "https://coronavirus-tracker-api.herokuapp.com",
    // window.location.origin,
    headers: {
      "Content-Type": "application/json"
    }
  }),
  // instanceThree: axios.create({
  //   baseURL: "https://coronavirus-tracker-api.herokuapp.com",
  //   // window.location.origin,
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // })
};

const wrapRequestBody = requestBody => {
  return requestBody;
};

export const httpRequest = async ({
  method = "get",
  endPoint,
  queryObject = [],
  requestBody = {},
  instance = "instanceOne",
  hasSpinner = true
}) => {
  if (hasSpinner) {
    store.dispatch(prepareFinalObject("spinner", true));
  }
  let apiError = "Api Error";

  var headerConfig = {
    headers: { Authorization: `Bearer ${getToken()}` }
  };

  endPoint = addQueryArg(endPoint, queryObject);
  var response;
  try {
    switch (method) {
      case "post":
        response = await axiosInstances[instance].post(
          endPoint,
          wrapRequestBody(requestBody),
          headerConfig
        );
        break;
      default:
        response = await axiosInstances[instance].get(endPoint);
    }
    const responseStatus = parseInt(response.status, 10);
    if (hasSpinner) {
      store.dispatch(prepareFinalObject("spinner", false));
    }
    if (responseStatus === 200 || responseStatus === 201) {
      return response.data;
    }
  } catch (error) {
    const { data, status } = error.response;
    if (status === 400 && data === "") {
      apiError = "INVALID_TOKEN";
    }
    else {
      apiError = data;
    }
    if (hasSpinner) {
      store.dispatch(prepareFinalObject("spinner", false));
    }
  }

  return apiError;
};
