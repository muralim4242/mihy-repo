import React from 'react';
import { storiesOf } from '@storybook/react';

import CardMedia from './index'

storiesOf('ui-atoms : CardMedia', module)
    .add('Default CardMedia', () => <CardMedia component='div'>CardMedia</CardMedia>)
    .add('Component CardMedia', () => <CardMedia component='h1'>CardMedia</CardMedia>)
    .add('Image CardMedia', () => <CardMedia component='img' image='dank.jpg'/>)
    .add('Media CardMedia', () => <CardMedia component='iframe' src='https://www.youtube.com/embed/QAUfJk6jYZM'>CardMedia</CardMedia>)