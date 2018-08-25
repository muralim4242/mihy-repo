import React from "react";
import {Button,Container,Item,Div,Icon} from "ui-atoms";
import {donorProcessOption} from "./spec";

const Dashboard=()=>{
  return(
    <Div>
    <Container>
      {
        donorProcessOption.map((item,key)=>{
          return (
            <Item {...item.itemProps} key={key}>
            <Button fullWidth={true} variant="extendedFab" aria-label={item.displayLabel} {...item.buttonProps}>
              <Icon iconName={item.iconName} {...item.IconProps}/>
              {item.displayLabel}
            </Button>
            </Item>
          )
        })
      }
    </Container>
    </Div>
  )
}

export default Dashboard;
