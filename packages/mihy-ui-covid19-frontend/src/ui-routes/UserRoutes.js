import React from "react";
import { Route } from "react-router";
import Loadable from "react-loadable";
import Loading from "../ui-molecules/Loading";

const Dashboard = Loadable({
  loader: () => import("../ui-pages/UserHome/components/Content/Dashboard"),
  loading: Loading
});
const Statistics = Loadable({
  loader: () => import("../ui-pages/UserHome/components/Content/Statistics"),
  loading: Loading
});
const DistrictList = Loadable({
  loader: () => import("../ui-pages/UserHome/components/Content/DistrictList"),
  loading: Loading
});
const FAQ = Loadable({
  loader: () => import("../ui-pages/UserHome/components/Content/FAQ"),
  loading: Loading
});
const Notification = Loadable({
  loader: () => import("../ui-pages/UserHome/components/Content/Dashboard/components/Notification"),
  loading: Loading
});
const UserRoutes = () => {
  return (
    <div>
      <Route exact path="/user-home" component={Dashboard} />
      <Route path="/user-home/statistics" component={Statistics} />
      <Route path="/user-home/districts-list" component={DistrictList} />
      <Route path="/user-home/about-faq" component={FAQ} />
      <Route path="/user-home/new-cases" component={Notification} />
    </div>
  )
}

export default UserRoutes;
