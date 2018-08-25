
const auth = (store) => (next) => (action) => {
  const { type } = action;

  if (/(_ERROR|_FAILURE)$/.test(type) && action.error === "INVALID_TOKEN") {
    
  } else {
    next(action);
  }
};

export default auth;
