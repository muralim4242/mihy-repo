import React from "react";
import RenderScreen from "../RenderScreen";
import { connect } from "react-redux";
import { SnackbarContainer } from "../../ui-containers";
import LoadingIndicator from "../../ui-molecules/LoadingIndicator";
import "./index.css";

class CommonView extends React.Component {
  render() {
    const {
      components,
      uiFramework,
      onFieldChange,
      onComponentClick,
      preparedFinalObject,
      screenKey
    } = this.props;
    const { toast, spinner } = this.props;
    const { errorType, message, open } = toast;
    return (
      <div>
        <RenderScreen
          components={components}
          uiFramework={uiFramework}
          onFieldChange={onFieldChange}
          onComponentClick={onComponentClick}
          preparedFinalObject={preparedFinalObject}
          screenKey={screenKey}
        />
        {open && (
          <SnackbarContainer
            variant={errorType}
            message={message}
            open={open}
          />
        )}
        {spinner && <LoadingIndicator />}
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { app } = state;
  const { toast, spinner } = app;
  return {
    toast,
    spinner
  };
};

export default connect(
  mapStateToProps,
  {}
)(CommonView);
