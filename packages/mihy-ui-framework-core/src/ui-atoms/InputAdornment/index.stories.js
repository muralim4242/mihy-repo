import React from 'react';
import { storiesOf } from '@storybook/react';

import InputAdornment from './index'

storiesOf('ui-atoms : InputAdornment', module)
    .add('InputAdornment "Div" Component', () => <InputAdornment component='div'>InputAdornment "Div" Component</InputAdornment>)
    .add('InputAdornment Variant', () =>
        <React.Fragment>
            <InputAdornment variant='standard'>InputAdornment Standard</InputAdornment>
            <InputAdornment variant='outlined'>InputAdornment Outlined</InputAdornment>
            <InputAdornment variant='filled'>InputAdornment Filled</InputAdornment>
        </React.Fragment>)
    .add('InputAdornment Position', () =>
        <React.Fragment>
            <InputAdornment position='start'>InputAdornment Start Position</InputAdornment>
            <InputAdornment position='end'>InputAdornment End Position</InputAdornment>
        </React.Fragment>)
    .add('InputAdornment disableTypography', () =>
        <React.Fragment>
            <InputAdornment disabledTypography='false'>InputAdornment false disableTypography</InputAdornment>
            <InputAdornment disabledTypography='true'>InputAdornment true disableTypography</InputAdornment>
        </React.Fragment>)
    .add('InputAdornment disablePointerEvents', () =>
        <React.Fragment>
            <InputAdornment disablePointerEvents='false'>InputAdornment false disablePointerEvents</InputAdornment>
            <InputAdornment disablePointerEvents='true'>InputAdornment true disablePointerEvents</InputAdornment>
        </React.Fragment>)
