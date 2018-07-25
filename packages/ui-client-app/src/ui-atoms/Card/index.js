import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';


const SimpleCard=(props)=> {
  const { children,...rest } = props;
  return (
      <Card {...rest}>
        {children}
      </Card>
  );
}

SimpleCard.propTypes = {
  children: PropTypes.any.isRequired,
};

export default SimpleCard;
