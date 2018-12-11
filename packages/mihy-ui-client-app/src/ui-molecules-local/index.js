import React from "react";
import Loadable from "react-loadable";
import LinearProgress from "mihy-ui-framework/ui-atoms/LinearSpinner";

const Loading = () => <LinearProgress />;
const TestMolecules = Loadable({
  loader: () => import("./TestMolecules"),
  loading: () => <Loading />
});

// const BloodList = Loadable({
//   loader: () => import("./BloodList"),
//   loading: () => <Loading />
// });

const SearchResult = Loadable({
  loader: () => import("./SearchResult"),
  loading: () => <Loading />
});

export {
  TestMolecules,
  // BloodList,
  SearchResult
}
