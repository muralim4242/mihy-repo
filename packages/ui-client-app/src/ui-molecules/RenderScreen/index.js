import React from "react";
import isEmpty from "lodash/isEmpty";
import { ComponentInterface } from "ui-molecules";

const RenderScreen = ({ components,uiFramework:rootFramework,onFieldChange }) => {
  return components
    ? Object.keys(components).map(componentKey => {
        const {
          uiFramework,
          componentPath,
          componentJsonpath,
          jsonPath,
          props
        } = components[componentKey];
        const extraProps = jsonPath
          ? {
              onChange: e => {
                onFieldChange("", componentJsonpath, jsonPath, e.target.value);
              }
            }
          : {};
        if (!isEmpty(components[componentKey].children)) {
          return (
            <ComponentInterface
              key={componentKey}
              id={componentKey}
              uiFramework={uiFramework || rootFramework}
              componentPath={componentPath}
              props={{ ...props, ...extraProps }}
            >
              <RenderScreen components={components[componentKey].children} onFieldChange={onFieldChange} uiFramework={rootFramework}/>
            </ComponentInterface>
          );
        } else {
          return (
            <ComponentInterface
              key={componentKey}
              id={componentKey}
              uiFramework={uiFramework|| rootFramework}
              componentPath={componentPath}
              props={{ ...props, ...extraProps }}
            />
          );
        }
      })
    : null;
};

export default RenderScreen;
