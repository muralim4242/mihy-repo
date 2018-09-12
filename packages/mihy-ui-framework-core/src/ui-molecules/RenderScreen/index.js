import React from "react";
import isEmpty from "lodash/isEmpty";
import ComponentInterface  from "../ComponentInterface";

const RenderScreen = ({ components,uiFramework:rootFramework,onFieldChange,onComponentClick,screenKey }) => {
  return components
    ? Object.keys(components).map(componentKey => {
        const {
          uiFramework,
          componentPath,
          componentJsonpath,
          jsonPath,
          props,
          onClickDefination,
          gridDefination,
          visible,
          type
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
              onComponentClick(onClickDefination,componentJsonpath);
            }
          }
        }
        if (type && type==="array") {
          extraProps={
            ...extraProps,
            onFieldChange,
            onComponentClick,
            uiFramework:rootFramework,
            componentJsonpath,
            screenKey
          }
        }
        if (!isEmpty(components[componentKey].children)) {
          // if (typeof components[componentKey].children==="string") {
          //   return (<span>{components[componentKey].children}</span>);
          // } else {
            return (
              <ComponentInterface
                key={componentKey}
                id={componentKey}
                uiFramework={uiFramework || rootFramework}
                componentPath={componentPath}
                props={{ ...props, ...extraProps }}
                gridDefination={gridDefination}
                visible={visible}
              >
                <RenderScreen components={components[componentKey].children} onFieldChange={onFieldChange} onComponentClick={onComponentClick} uiFramework={rootFramework} screenKey={screenKey}/>
              </ComponentInterface>
            );
          // }
        } else {
          return (
            <ComponentInterface
              key={componentKey}
              id={componentKey}
              uiFramework={uiFramework|| rootFramework}
              componentPath={componentPath}
              props={{ ...props, ...extraProps }}
              gridDefination={gridDefination}
              visible={visible}
            />
          );
        }
      })
    : null;
};

export default RenderScreen;
