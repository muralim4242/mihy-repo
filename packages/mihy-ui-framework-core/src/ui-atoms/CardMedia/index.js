import React from 'react';
// import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';

import "./index.css";


const SimpleCardMedia=(props)=> {
  const {...rest } = props;
  return (
      <CardMedia classes={{
        root:"mihy-card",
        media:"mihy-cardmedia",
        img:"mihy-cardimg"
      }}{...rest}/>
  );
}

// SimpleCardMedia.propTypes = {
//
// };

export default SimpleCardMedia;
