import React from 'react';
import { storiesOf } from '@storybook/react';

import Stepper from './index'

storiesOf('Stepper', module)
    .add('Stepper', () =>
        <Stepper
            activeStep={3}
            steps={['Step 1', 'Step 2', 'Step 3']}
        ></Stepper>)