import React from "react";
import Loadable from "react-loadable";
import LinearProgress from "mihy-ui-framework/ui-atoms/LinearSpinner";
const Loading = () => <LinearProgress />;

const TextFieldContainer = Loadable({
  loader: () => import("./TextFieldContainer"),
  loading: () => <Loading />
});

const TextFieldContainerNew = Loadable({
  loader: () => import("./TextFieldContainerNew"),
  loading: () => <Loading />
});

export { TextFieldContainer ,TextFieldContainerNew};
