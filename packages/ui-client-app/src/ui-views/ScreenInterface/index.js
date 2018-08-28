import React from "react";
import {screenHoc} from "ui-hocs";
import {Div} from "ui-atoms";
import {RenderScreen} from "ui-molecules";

class ScreenInterface extends React.Component {
  render()
  {
    const {components,uiFramework,onFieldChange,onComponentClick}=this.props;
    return (
      <Div>
          <RenderScreen components={components} uiFramework={uiFramework} onFieldChange={onFieldChange} onComponentClick={onComponentClick}/>
      </Div>
    )
  }
}

export default screenHoc({path:"core",screenKey:"login"})(ScreenInterface);
