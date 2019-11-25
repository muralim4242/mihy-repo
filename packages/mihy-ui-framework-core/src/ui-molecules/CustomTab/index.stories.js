import React from 'react';
import { storiesOf } from '@storybook/react';

import CustomTab from './index'

storiesOf('ui-molecules : CustomTab', module)
    .add('CustomTab', () =>
        <CustomTab
            alignCenter
            tabs={[{ tabContent: 'Item 1', tabButton: 'Item Button 1' }, { tabContent: 'Item 2', tabButton: 'Item Button 2' }]}
            direction='ltr'
        ></CustomTab>)