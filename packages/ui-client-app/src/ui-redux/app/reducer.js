import * as actionTypes from "./actionTypes";

const initialState = {
  name: "MIHY",
  route: "",
  previousRoute: "",
  toast: {
    message: "",
    open: false,
    error: true
  }
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
    default:
      return state;
  }
};
export default appReducer;
