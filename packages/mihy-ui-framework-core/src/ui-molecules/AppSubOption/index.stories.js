import React from 'react';
import { storiesOf } from '@storybook/react';

import AppSubOption from './index'

storiesOf('ui-molecules : AppSubOption', module)
    .add('AppSubOption', () =>
        <AppSubOption item={{ displayLabel: "menu", itemImage: "dank.jpg", displaySubLabel: 'submenu' }} />)