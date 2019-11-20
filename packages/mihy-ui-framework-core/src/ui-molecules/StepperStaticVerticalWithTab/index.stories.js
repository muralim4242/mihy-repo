import React from 'react';
import { storiesOf } from '@storybook/react';

import StepperStaticVerticalWithTab from './index'

storiesOf('StepperStaticVerticalWithTab', module)
    .add('StepperStaticVerticalWithTab', () =>
        <StepperStaticVerticalWithTab
            steps={[{ iconColorOne: 'red', iconColorTwo: 'blue', iconName: 'IconName 1', displayLabel: 'Display Label 1', displaySubLabel: ['SubLabel 1', 'SubLabel 2'] },
            { iconColorOne: 'green', iconColorTwo: 'pink', iconName: 'IconName 2', displayLabel: 'Display Label 2', displaySubLabel: ['SubLabel 3', 'SubLabel 4'] }]}
        ></StepperStaticVerticalWithTab>)
