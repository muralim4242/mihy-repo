import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '../../ui-atoms/InputAdornment';
import TextField from '../../ui-atoms/TextFields/Text';
import Icon from '../../ui-atoms/Icon';


function InputWithIcon(props) {
  const { label,iconObj,...rest } = props;
  const extraProps = iconObj &&(iconObj.position === "end"?  {InputProps :{
      endAdornment: (
        <InputAdornment position="end">
          <Icon iconName={iconObj.iconName} />
        </InputAdornment>
      ),
  }}:
    {
      InputProps: {
        startAdornment: (
          <InputAdornment position="end">
            <Icon iconName={iconObj.iconName} />
          </InputAdornment>
        ),
      }
    })

  return (
      <TextField
        label={label}
        {...extraProps}
        {...rest }
      />

  );
}

InputWithIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default InputWithIcon;
