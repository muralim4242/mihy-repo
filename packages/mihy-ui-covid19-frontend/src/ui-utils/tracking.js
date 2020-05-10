import ReactGA from "react-ga";

export const initGA = (trackingID = "G-C8XQLJBH3H") => {
  ReactGA.initialize(trackingID);
};

export const pageView = (path) => {
  ReactGA.pageview(path);
};

export const event = (pageName, action, label) => {
  ReactGA.event({
    pageName,
    action,
    label,
  });
};
