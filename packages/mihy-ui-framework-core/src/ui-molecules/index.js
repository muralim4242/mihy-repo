import React from "react";
import Loadable from "react-loadable";
import LinearProgress from "../ui-atoms/LinearSpinner";
const Loading = () => <LinearProgress />;
const RenderRoutes = Loadable({
  loader: () => import("./RenderRoutes"),
  loading: () => <Loading />
});
const Map = Loadable({
  loader: () => import("./Map"),
  loading: () => <Loading />
});
const ComponentInterface = Loadable({
  loader: () => import("./ComponentInterface"),
  loading: () => <Loading />
});
const StepperNonLinearWithoutAction = Loadable({
  loader: () => import("./StepperNonLinearWithoutAction"),
  loading: () => <Loading />
});
const CardWithMedia = Loadable({
  loader: () => import("./CardWithMedia"),
  loading: () => <Loading />
});
const RenderScreen = Loadable({
  loader: () => import("./RenderScreen"),
  loading: () => <Loading />
});
const AppliedRoute = Loadable({
  loader: () => import("./AppliedRoute"),
  loading: () => <Loading />
});
const LoadingIndicator = Loadable({
  loader: () => import("./LoadingIndicator"),
  loading: () => <Loading />
});
const CommonView = Loadable({
  loader: () => import("./CommonView")  ,
  loading: () => <Loading />
});

const AppCard = Loadable({
  loader: () => import("./AppCard")  ,
  loading: () => <Loading />
});

const AppCards = Loadable({
  loader: () => import("./AppCards")  ,
  loading: () => <Loading />
});

const AppCarosel = Loadable({
  loader: () => import("./AppCarosel")  ,
  loading: () => <Loading />
});

const AppSubOption = Loadable({
  loader: () => import("./AppSubOption")  ,
  loading: () => <Loading />
});

const Stepper = Loadable({
  loader: () => import("./Stepper")  ,
  loading: () => <Loading />
});

const MultiItem = Loadable({
  loader: () => import("./MultiItem")  ,
  loading: () => <Loading />
});

const Carousel = Loadable({
  loader: () => import("./Carousel")  ,
  loading: () => <Loading />
});

const StepperStaticVertical = Loadable({
  loader: () => import("./StepperStaticVertical")  ,
  loading: () => <Loading />
});

const TextfieldWithIcon = Loadable({
  loader: () => import("./TextfieldWithIcon")  ,
  loading: () => <Loading />
});

export {
  RenderRoutes,
  Map,
  ComponentInterface,
  StepperNonLinearWithoutAction,
  CardWithMedia,
  RenderScreen,
  AppliedRoute,
  LoadingIndicator,
  CommonView,
  AppCard,
  AppCards,
  AppCarosel,
  AppSubOption,
  Stepper,
  MultiItem,
  Carousel,
  StepperStaticVertical,
  TextfieldWithIcon
};
