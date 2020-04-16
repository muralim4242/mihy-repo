import React from 'react';
import { storiesOf } from '@storybook/react';

import StepperNonLinearWithoutAction from './index'

storiesOf('ui-molecules : StepperNonLinearWithoutAction', module)
    .add('StepperNonLinearWithoutAction', () =>
        <StepperNonLinearWithoutAction
            getStepContent={() => { }}
            steps={['Step 1', 'Step 2', 'Step 3']}
        ></StepperNonLinearWithoutAction>)