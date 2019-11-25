import React from 'react';
import { storiesOf } from '@storybook/react';

import AppCards from './index'

storiesOf('ui-molecules : Appcards', module)
    .add('Appcards', () =>
        <AppCards appCards={[{ displayLabel: "menu", iconImage: "dank.jpg", displaySubLabel: 'submenu'},
        { displayLabel: "sidemenu", displaySubLabel: 'deepmenu' }]} />)