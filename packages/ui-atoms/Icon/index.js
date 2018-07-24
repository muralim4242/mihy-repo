import React from "react";
import PropTypes from "prop-types";
import Icon from '@material-ui/core/Icon';

const MihyIcon=(props)=>{
  const {iconName,color}=props;
  return (
    <Icon color={color}>
      {iconName}
    </Icon>
  )
}

MihyIcon.propTypes={
  iconName:PropTypes.string
}

export default MihyIcon;
