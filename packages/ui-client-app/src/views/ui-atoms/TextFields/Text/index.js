import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const MihyText=(props)=> {
    const {id,value,label,...rest} = props;

    return (
        <TextField
          id={id}
          label={label}
          value={value}
          {...rest}
        />
    );
  }

MihyText.propTypes = {
  id: PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  value:PropTypes.string
};

export default MihyText;
