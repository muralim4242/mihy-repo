import React from 'react';
import { storiesOf } from '@storybook/react';

import LoadingIndicator from './index'

storiesOf('LoadingIndicator', module)
    .add('LoadingIndicator', () =>
        <LoadingIndicator loadingColor='secondary' />)