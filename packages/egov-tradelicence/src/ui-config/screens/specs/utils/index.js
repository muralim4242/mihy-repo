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

export const getCommonHeader = header => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Label",
    props: {
      label: header,
      className: "apply-application-for-new"
    }
  };
};

export const getCommonSubHeader = header => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Label",
    props: {
      label: header,
      className: "mihy-subheader"
    }
  };
};

export const getCommonParagraph = Paragraph => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Label",
    props: {
      label: Paragraph,
      className: "mihy-paragraph"
    }
  };
};

export const getCommonCard = (children,cardProps={}) => {
  return {
    componentPath: "Card",
    props:{
      ...cardProps
    },
    children:{
      cardContent:{
        componentPath:"CardContent",
        children
      }
    }
  };
};

export const getCommonGrayCard = (children) => {
  return getCommonCard(children,{style:{backgroundColor:"#F2F2F2"}})
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
    sm:6
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
    sm:6
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

export const getCommonContainer=(children)=>{
  return {
      componentPath:"Grid",
      props:{
        container:true
      },
      children
  }
}
