import React from 'react';
import { storiesOf } from '@storybook/react';

import CardWithMedia from './index'

storiesOf('CardWithMedia', module)
    .add('CardWithMedia', () =>
        <CardWithMedia
            cardContent={['Typo1', 'Typo2']}
            classes={{ cover: { backgroundSize: 'cover' } }}
            heading='CardWithMedia'
            cardMedia={{
                src: 'dank.jpg',
                title: 'CardWithMedia'
            }} />)