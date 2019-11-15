import React from 'react';
import { storiesOf } from '@storybook/react';

import LinearSpinner from './index'


storiesOf('LinearSpinner', module)
    .add('LinearSpinner Colors', () =>
        <React.Fragment>
            Primary
            <LinearSpinner color='primary' />
            <br />
            Secondary
            <LinearSpinner color='secondary' />
        </React.Fragment>)
    .add('LinearSpinner Variant', () =>
        <React.Fragment>
            Determinate
            <LinearSpinner color='primary' variant='determinate' />
            <br />
            Indeterminate
            <LinearSpinner color='secondary' variant='indeterminate' />
            <br />
            Buffer
            <LinearSpinner color='primary' variant='buffer' />
            <br />
            Query
            <LinearSpinner color='secondary' variant='query' />
        </React.Fragment>)
    .add('LinearSpinner Buffer Value', () =>
        <React.Fragment>
            <LinearSpinner variant="buffer" value={25} valueBuffer={50} />
            <br />
            <LinearSpinner variant="buffer" value={50} valueBuffer={75} color="secondary" />
        </React.Fragment>)
