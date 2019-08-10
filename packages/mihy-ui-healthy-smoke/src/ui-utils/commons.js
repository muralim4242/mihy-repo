import {prepareFinalObject} from "../ui-redux/screen-configuration/actions";

export const addQueryArg = (url, queries = []) => {
  const urlParts = url.split("?");
  const path = urlParts[0];
  let queryParts = urlParts.length > 1 ? urlParts[1].split("&") : [];
  queries.forEach(query => {
    const key = query.key;
    const value = query.value;
    const newQuery = `${key}=${value}`;
    queryParts.push(newQuery);
  });
  const newUrl = path + "?" + queryParts.join("&");
  return newUrl;
};


export const getUrlParameterValue=(key)=>{
  let params = (new URL(document.location)).searchParams;
    let value = params.get(key);
    return value;
}

export const age=(dateString)=>{
    let birth = new Date(dateString);
    let now = new Date();
    let beforeBirth = ((() => {birth.setDate(now.getDate());birth.setMonth(now.getMonth()); return birth.getTime()})() < birth.getTime()) ? 0 : 1;
    return now.getFullYear() - birth.getFullYear() - beforeBirth;
}



// export const getQueryArg = (url, name) => {
//   if (!url) url = window.location.href;
//   name = name.replace(/[\[\]]/g, "\\$&");
//   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//     results = regex.exec(url);
//   if (!results) return null;
//   if (!results[2]) return "";
//   return decodeURIComponent(results[2].replace(/\+/g, " "));
// };

export const mapDispatchToProps=(dispatch)=>{
  return {
    setAppData:(jsonPath,data)=>{
      dispatch(prepareFinalObject(jsonPath,data))
    }
  }
}



export let snackbarObj = {};
snackbarObj.open = true;
snackbarObj.variant = "error";
