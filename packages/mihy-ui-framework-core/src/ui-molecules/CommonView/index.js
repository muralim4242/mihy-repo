import React from "react";
import RenderScreen from "../RenderScreen";
// import Container from "../../ui-atoms/Layout/Container";
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
    return (
        <RenderScreen
          components={components}
          uiFramework={uiFramework}
          onFieldChange={onFieldChange}
          onComponentClick={onComponentClick}
          preparedFinalObject={preparedFinalObject}
          screenKey={screenKey}
        />
    );
  }
}

export default CommonView;
