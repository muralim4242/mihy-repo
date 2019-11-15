import React from 'react';
import { storiesOf } from '@storybook/react';

import Typography from './index'

storiesOf('Typography', module)
    .add('Typography Variant', () =>
        <React.Fragment>
            <Typography variant='h1'>Typography Variant h1</Typography>
            <Typography variant='h2'>Typography Variant h2</Typography>
            <Typography variant='h3'>Typography Variant h3</Typography>
            <Typography variant='h4'>Typography Variant h4</Typography>
            <Typography variant='h5'>Typography Variant h5</Typography>
            <Typography variant='h6'>Typography Variant h6</Typography>
            <Typography variant='subtitle1'>Typography Variant subtitle1</Typography>
            <Typography variant='subtitle2'>Typography Variant subtitle2</Typography>
            <Typography variant='body1'>Typography Variant body1</Typography>
            <Typography variant='body2'>Typography Variant body2</Typography>
            <Typography variant='caption'>Typography Variant caption</Typography>
            <Typography variant='button'>Typography Variant button</Typography>
            <Typography variant='overline'>Typography Variant overline</Typography>
            <Typography variant='srOnly'>Typography Variant srOnly</Typography>
        </React.Fragment>)
    .add('Typography Color', () =>
        <React.Fragment>
            <Typography color='inherit'>Typography Color inherit</Typography>
            <Typography color='primary'>Typography Color primary</Typography>
            <Typography color='secondary'>Typography Color secondary</Typography>
            <Typography color='textPrimary'>Typography Color textPrimary</Typography>
            <Typography color='textSecondary'>Typography Color textSecondary</Typography>
            <Typography color='error'>Typography Color error</Typography>
        </React.Fragment>)

    .add('Typography Align', () =>
        <React.Fragment>
            <Typography align='left'>Typography Align left</Typography>
            <Typography align='center'>Typography Align center</Typography>
            <Typography align='right'>Typography Align right</Typography>
            <Typography align='justify'>Typography Align justify</Typography>
        </React.Fragment>)

    .add('Typography Display', () =>
        <React.Fragment>
            <Typography display='block'>Typography Display block</Typography>
            <Typography display='inline'>Typography Display inline</Typography>
        </React.Fragment>)