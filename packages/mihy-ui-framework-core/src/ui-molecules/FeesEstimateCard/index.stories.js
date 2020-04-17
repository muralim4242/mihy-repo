import React from 'react';
import { storiesOf } from '@storybook/react';

import FeesEstimateCard from './index'

storiesOf('ui-molecules : FeesEstimateCard', module)
    .add('FeesEstimateCard', () =>
        <FeesEstimateCard
            estimate={{
                header: 'Fee Estimate',
                fees: [
                    { fee: 'Fee info 1', name: 'Fee name 1', value: 100 },
                    { fee: 'Fee info 2', name: 'Fee name 2', value: 200 }],
                extra: [
                    { textLeft: 'This is a Left text'}, { textRight: 'This is a Right text' }]
            }}
        ></FeesEstimateCard>)