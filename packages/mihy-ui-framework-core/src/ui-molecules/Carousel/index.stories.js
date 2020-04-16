import React from 'react';
import { storiesOf } from '@storybook/react';

import Carousel from './index'

storiesOf('ui-molecules : Carousel', module)
    .add('Carousel', () =>
        <Carousel
            items={[{ src: 'dank.jpg', legend: 'Book' },
            { src: 'pixel.jpg', legend: 'Pixel' }]}
        ></Carousel>)