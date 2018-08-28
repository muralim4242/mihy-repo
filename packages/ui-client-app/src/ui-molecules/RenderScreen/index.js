import React from "react";
import isEmpty from "lodash/isEmpty";
import { ComponentInterface } from "ui-molecules";

const RenderScreen = ({ components,uiFramework:rootFramework,onFieldChange,onComponentClick }) => {
  return components
    ? Object.keys(components).map(componentKey => {
        const {
          uiFramework,
          componentPath,
          componentJsonpath,
          jsonPath,
          props,
          onClickDefination
        } = components[componentKey];
        let extraProps = jsonPath
          ? {
              onChange: e => {
                onFieldChange("", componentJsonpath, jsonPath, e.target.value);
              }
            }
          : {};
        if (onClickDefination) {
          extraProps={
            ...extraProps,
            onClick:e =>{
              onComponentClick(onClickDefination);
            }
          }
        }
        if (!isEmpty(components[componentKey].children)) {
          return (
            <ComponentInterface
              key={componentKey}
              id={componentKey}
              uiFramework={uiFramework || rootFramework}
              componentPath={componentPath}
              props={{ ...props, ...extraProps }}
            >
              <RenderScreen components={components[componentKey].children} onFieldChange={onFieldChange} onComponentClick={onComponentClick} uiFramework={rootFramework}/>
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
