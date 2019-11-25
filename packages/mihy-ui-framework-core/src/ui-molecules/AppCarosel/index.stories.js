import React from 'react';
import { storiesOf } from '@storybook/react';

import AppCarosel from './index'

storiesOf('ui-molecules : AppCarosel', module)
    .add('AppCarosel', () =>
        <AppCarosel item={{ displayLabel: "menu", itemImage: "dank.jpg", displaySubLabel: 'submenu' }} />)