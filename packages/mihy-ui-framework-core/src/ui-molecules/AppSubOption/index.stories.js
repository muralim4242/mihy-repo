import React from 'react';
import { storiesOf } from '@storybook/react';

import AppSubOption from './index'

storiesOf('AppSubOption', module)
    .add('AppSubOption', () =>
        <AppSubOption item={{ displayLabel: "menu", itemImage: "dank.jpg", displaySubLabel: 'submenu' }} />)