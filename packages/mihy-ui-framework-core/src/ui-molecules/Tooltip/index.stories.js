import React from 'react';
import { storiesOf } from '@storybook/react';

import Tooltip from './index'

storiesOf('ui-molecules : Tooltip', module)
    .add('Tooltip', () => <Tooltip
        icon='Icon' val={{ value: 5, key: 5 }}
    ></Tooltip>)
