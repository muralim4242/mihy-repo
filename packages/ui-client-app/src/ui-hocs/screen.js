import React from "react";
import { connect } from "react-redux";
import {
  initScreen,
  handleScreenConfigurationFieldChange,
  submitForm
} from "ui-redux/screen-configuration/actions";
import isEmpty from "lodash/isEmpty";
import { addComponentJsonpath } from "ui-utils";

const screenHoc = ({ path = "", screenKey, ...rest }) => Screen => {
  class ScreenWrapper extends React.Component {
    constructor(props) {
      super(props);
      const { initScreen } = props;
      try {
        this.screenConfig = require(`ui-config/screens/specs/${path}/${screenKey}`).default;
        if (!isEmpty(this.screenConfig)) {
          addComponentJsonpath(this.screenConfig.components);
        }
      } catch (error) {
        // the error is assumed to have occured due to absence of config; so ignore it!
        console.log(error);
      }
      initScreen(screenKey, JSON.parse(JSON.stringify(this.screenConfig)));
    }

    handleScreenConfigurationFieldChange = (
      sreenKey = "",
      componentJsonpath,
      jsonPath,
      value
    ) => {
      const { handleScreenConfigurationFieldChange } = this.props;
      handleScreenConfigurationFieldChange(
        screenKey,
        componentJsonpath,
        "value",
        value
      );
    };

    onClick=(onClickDefination)=>{
      switch (onClickDefination.action) {
        case "submit":
          const {submitForm}=this.props;
          const {method,endPoint,purpose,redirectionUrl,bodyObjectsJsonPaths,queryObjectJsonPath}=onClickDefination;
          submitForm(screenKey,method,endPoint,purpose,redirectionUrl,bodyObjectsJsonPaths||{},queryObjectJsonPath||[]);
          break;
        default:

      }
    }

    render() {
      const { screenConfig } = this.props;
      const { [screenKey]: currentScreenConfig ,preparedFinalObject} = screenConfig;
      // console.log(this);
      // console.log(currentScreenConfig);
      if (currentScreenConfig) {
        const { handleScreenConfigurationFieldChange,onClick } = this;
        const { uiFramework, components, name } = currentScreenConfig;
        return (
          <Screen
            uiFramework={uiFramework}
            components={components}
            screenKey={name}
            onFieldChange={handleScreenConfigurationFieldChange}
            onComponentClick={onClick}
            preparedFinalObject={preparedFinalObject}
          />
        );
      } else {
        return null;
      }
    }
  }

  const mapStateToProps = ({ screenConfiguration }) => {
    const { screenConfig,preparedFinalObject } = screenConfiguration;
    return { screenConfig,preparedFinalObject };
  };

  const mapDispatchToProps = dispatch => {
    return {
      handleScreenConfigurationFieldChange: (
        screenKey,
        componentJsonpath,
        jsonPath,
        value
      ) =>
        dispatch(
          handleScreenConfigurationFieldChange(
            screenKey,
            componentJsonpath,
            jsonPath,
            value
          )
        ),
      submitForm: (
        screenKey,
        method,
        endpoint,
        action,
        bodyObjectsJsonPaths = [],
        queryObjectJsonPath = []
      ) =>
        dispatch(
          submitForm(
            screenKey,
            method,
            endpoint,
            action,
            bodyObjectsJsonPaths,
            queryObjectJsonPath
          )
        ),
      initScreen: (screenKey, screenConfig) =>
        dispatch(initScreen(screenKey, screenConfig))
      // deleteForm: () => dispatch(deleteForm(formKey)),
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(ScreenWrapper);
};

export default screenHoc;
