import React from 'react';
import { storiesOf } from '@storybook/react';

import Snackbar from './index'

storiesOf('Snackbar', module)
    .add('Snackbar', () => <Snackbar onClose message='Hiii'>Hi</Snackbar>)