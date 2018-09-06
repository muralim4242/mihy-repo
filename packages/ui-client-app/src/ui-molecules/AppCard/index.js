import React from "react";
import { Button, Icon,Div } from "ui-atoms";
import "./index.css";

const AppCard = ({item}) => {
  return (
    <Button
      fullWidth={true}
      variant="extendedFab"
      aria-label={item.displayLabel}
      {...item.buttonProps}
    >
      <Div className="mihy-left-icon-style">

      </Div>

      <Div>
        {item.displayLabel}
      </Div>
      {/*<Icon iconName={item.iconName} {...item.IconProps} />*/}
    </Button>
  );
};

export default AppCard;
