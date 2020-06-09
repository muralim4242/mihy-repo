import * as actionTypes from "./actionTypes";

const initialState = {
  // name: "MIHY",
  snackbar: {
    open: false,
    variant: "success",
    message: ""
  },
  route: "",
  previousRoute: "",
  toast: {
    message: "",
    open: false,
    error: true
  },
  appName:"",
  iframeUrl:"",
  spinner:false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ROUTE:
      return {
        ...state,
        previousRoute: action.route
          ? window.location.pathname
          : state.previousRoute,
        route: action.route
      };
    case actionTypes.SHOW_TOAST:
      return {
        ...state,
        toast: {
          message: action.message,
          open: action.open,
          error: action.error
        }
      };
    case actionTypes.TOGGLE_SPINNER:
      return {
        ...state,
        spinner:!state.spinner
      }
      case actionTypes.SET_STATES_FROM_RESPONSE:
      var { attribute, val } = action.payload;
      return {
        ...state,
        [attribute]: val
      };
    default:
      return state;
  }
};
export default appReducer;
