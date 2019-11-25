import React from 'react';
import { storiesOf } from '@storybook/react';

import Toolbar from './index'

storiesOf('ui-atoms : Toolbar', module)
    .add('Toolbar', () =>
    <React.Fragment>
        <Toolbar component='h1'>Toolbar component H1</Toolbar>
        <Toolbar component='h1' disableGutters>Toolbar disableGutters</Toolbar>
        <Toolbar variant='regular'>Toolbar Variant Regular</Toolbar>
        <Toolbar variant='dense'>Toolbar Variant Dense</Toolbar>
        </React.Fragment>)