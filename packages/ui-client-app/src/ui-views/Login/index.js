import React from "react";
import {screenHoc} from "ui-hocs";
import {Div} from "ui-atoms";
import {RenderScreen} from "ui-molecules";

class Login extends React.Component {
  render()
  {
    const {components,uiFramework,onFieldChange}=this.props;
    return (
      <Div>
          <RenderScreen components={components} uiFramework={uiFramework} onFieldChange={onFieldChange}/>
      </Div>
    )
  }
}

export default screenHoc({path:"core",screenKey:"login"})(Login);
