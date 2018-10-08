import React from "react";
import RenderScreen from "../RenderScreen";
import { connect } from "react-redux";
import { SnackbarContainer } from "../../ui-containers";
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
    const { toast } = this.props;
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
      </div>
    );
  }
}
const mapStateToProps = (state, ownprops) => {
  const { app } = state;
  const { toast } = app;
  return { toast };
};

export default connect(
  mapStateToProps,
  {}
)(CommonView);
