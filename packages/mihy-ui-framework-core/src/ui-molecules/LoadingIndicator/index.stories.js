import React from 'react';
import { storiesOf } from '@storybook/react';

import LoadingIndicator from './index'

storiesOf('ui-molecules : LoadingIndicator', module)
    .add('LoadingIndicator', () =>
        <LoadingIndicator loadingColor='secondary' />)