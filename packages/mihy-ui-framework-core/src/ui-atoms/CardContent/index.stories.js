import React from 'react';
import { storiesOf } from '@storybook/react';

import CardContent from './index'

storiesOf('ui-atoms : CardContent', module)
    .add('Default CardContent', () => <CardContent component='div'>CardContent</CardContent>)
    .add('Component CardContent', () => <CardContent component='h1'>CardContent</CardContent>)