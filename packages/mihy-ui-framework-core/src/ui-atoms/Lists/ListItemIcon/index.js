import React from "react";
import PropTypes from "prop-types";
import ListItemIcon from '@material-ui/core/ListItemIcon';

import "./index.css";

const MihyListItemIcon = (props) => {
  const { children, ...rest } = props;
  return (
    <ListItemIcon classes={{
      root: "mihy-listitemicon"
    }} {...rest}>
      {children}
    </ListItemIcon>
  )
}

MihyListItemIcon.propTypes = {
  children: PropTypes.any
}

export default MihyListItemIcon;
