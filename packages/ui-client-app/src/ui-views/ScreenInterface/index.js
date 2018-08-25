import React from "react";
import {screen} from "ui-hocs";
import {Div} from "ui-atoms";
import {renderScreen} from "ui-molecules";

class ScreenInterface extends React.Component {
  render()
  {
    const {screenConfig}=this.props;
    const {renderScreen}=this;
    return (
      <Div>
          {renderScreen(screenConfig.components)}
      </Div>
    )
  }
}

export default screen({screenKey:"registrationScreen",path:"blood/registration"})(ScreenInterface);
