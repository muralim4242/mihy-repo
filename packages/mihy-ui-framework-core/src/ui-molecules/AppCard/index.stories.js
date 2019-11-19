import React from 'react';
import { storiesOf } from '@storybook/react';

import AppCard from './index'

storiesOf('Appcard', module)
    .add('Appcard', () =>
        <AppCard item={{ displayLabel: "menu", iconImage: "dank.jpg", displaySubLabel: 'submenu' }} />)