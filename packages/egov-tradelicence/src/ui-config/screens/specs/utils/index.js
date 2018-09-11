import { handleScreenConfigurationFieldChange as handleField } from "mihy-ui-framework/ui-redux/screen-configuration/actions";

export const getStepperObject = (
  stpperProps,
  stepsData,
  uiFramework = "material-ui"
) => {
  let stepperData = {};
  if (uiFramework === "material-ui") {
    stepperData = {
      componentPath: "Stepper",
      uiFramework: "custom-molecules",
      props: {
        steps: stepsData,
        ...stpperProps.props
      }
    };
  }
  return stepperData;
};


export const getCommonHeader = (header,props) => {
  return {
    componentPath: "Typography",
    props: {
      variant:"headline",
      ...props
    },
    children:{
      [header]:getLabel(header)
    }
  };
};

export const getCommonTitle = header => {
  return getCommonHeader(header,{variant:"title"})
};

export const getCommonSubHeader = header => {
  return getCommonHeader(header,{variant:"subheading"})
};

export const getCommonParagraph = paragraph => {
  return getCommonHeader(paragraph,{variant:"body1"})
};

export const getCommonValue = value => {
  return getCommonHeader(value,{variant:"body2"})
};

export const getCommonCard = (children, cardProps = {}) => {
  return {
    componentPath: "Card",
    props: {
      ...cardProps
    },
    children: {
      cardContent: {
        componentPath: "CardContent",
        children
      }
    }
  };
};

export const getCommonGrayCard = children => {
  return getCommonCard(children, {
    style: {
      backgroundColor: "rgb(242, 242, 242)",
      boxShadow: "none",
      borderRadius: 0
    }
  });
};

export const getBreak = () => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Break"
  };
};

export const getLabel = label => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Label",
    props: {
      label
    }
  };
};

export const getTextField = (
  label,
  placeholder,
  required,
  pattern,
  gridDefination = {
    xs: 12,
    sm: 6
  }
) => {
  return {
    uiFramework: "material-ui",
    componentPath: "TextField",
    props: {
      label,
      InputLabelProps: {
        shrink: true
      },
      placeholder,
      fullWidth: true,
      required
    },
    gridDefination,
    required,
    pattern
  };
};

export const getSelectTextField = (
  label,
  placeholder,
  required,
  pattern,
  gridDefination = {
    xs: 12,
    sm: 6
  }
) => {
  return {
    uiFramework: "material-ui",
    componentPath: "TextField",
    props: {
      select: true,
      label,
      InputLabelProps: {
        shrink: true
      },
      placeholder,
      fullWidth: true,
      required
    },
    gridDefination,
    required,
    pattern
  };
};

export const getCommonContainer = children => {
  return {
    componentPath: "Grid",
    props: {
      container: true
    },
    children
  };
};

export const dispatchMultipleFieldChangeAction = (
  screenKey,
  actionDefination = [],
  dispatch
) => {
  for (var i = 0; i < actionDefination.length; i++) {
    const { path, property, value } = actionDefination[i];
    dispatch(handleField(screenKey, path, property, value));
  }
};
