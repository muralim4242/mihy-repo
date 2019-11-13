import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './index'

storiesOf('Card', module)
    .add('Default Card', () => <Card>Card</Card>)
    .add('Raised Card', () => <Card raised='true'>Card</Card>)