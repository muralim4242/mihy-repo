import React from "react";
import { connect } from "react-redux";
import { initScreen ,handleScreenConfigurationFieldChange} from "ui-redux/screen-configuration/actions";
import isEmpty from "lodash/isEmpty";
import { addComponentJsonpath } from "ui-utils";

const screenHoc = ({ path = "", screenKey,  ...rest }) => Screen => {
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
      handleScreenConfigurationFieldChange(screenKey,componentJsonpath, "value", value);
    };

    render() {
      const { screenConfig } = this.props;
      const {[screenKey]:currentScreenConfig} =screenConfig;
      console.log(this);
      console.log(currentScreenConfig);
      if (currentScreenConfig) {
        const { handleScreenConfigurationFieldChange } = this;
        const {uiFramework,components,name}=currentScreenConfig;
        return (
          <Screen
            uiFramework={uiFramework}
            components={components}
            screenKey={name}
            onFieldChange={handleScreenConfigurationFieldChange}
          />
        );
      }
      else {
        return null;
      }

    }
  }

  const mapStateToProps = ({ screenConfiguration }) => {
    const { screenConfig } = screenConfiguration;
    return { screenConfig };
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
      // submitForm: (formKey, saveUrl) => dispatch(submitForm(formKey, saveUrl)),
      initScreen: (screenKey, screenConfig) =>
        dispatch(initScreen(screenKey, screenConfig))
      // deleteForm: () => dispatch(deleteForm(formKey)),
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(ScreenWrapper);
};

export default screenHoc;
