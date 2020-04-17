import React from 'react';
import { storiesOf } from '@storybook/react';

import RadioGroup from './index'

storiesOf('ui-molecules : RadioGroup', module)
    .add('RadioGroup', () =>
        <RadioGroup
            buttons={['Button 1', 'Button 2']}
        ></RadioGroup>)