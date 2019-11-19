import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from './index'
import Item from '../Item/index'

storiesOf('Layout Container', module)
    .add('Container Spacing', () =>
        <React.Fragment>
            <Container spacing={3}><Item>Container 3</Item><Item>Container 3</Item><Item>Container 3</Item></Container>
            <Container spacing={6}><Item>Container 6</Item><Item>Container 6</Item><Item>Container 6</Item><Item>Container 6</Item><Item>Container 6</Item><Item>Container 6</Item></Container>
            <Container spacing={9}><Item>Container 9</Item><Item>Container 9</Item><Item>Container 9</Item><Item>Container 9</Item><Item>Container 9</Item><Item>Container 9</Item><Item>Container 9</Item><Item>Container 9</Item><Item>Container 9</Item></Container>
        </React.Fragment>)
    .add('Container Justify', () =>
        <React.Fragment>
            <Container justify='flex-start'>Container Flex-Start</Container>
            <Container justify='center'>Container Center</Container>
            <Container justify='flex-end'>Container Flex-End</Container>
            <Container justify='space-between'>Container Space-Between</Container>
            <Container justify='space-around'>Container Space-Around</Container>
            <Container justify='space-evenly'>Container Space-Evenly</Container>
        </React.Fragment>)
    .add('Container Direction', () =>
        <React.Fragment>
            <Container direction='row'>Container Row</Container>
            <Container direction='row-reverse'>Container Row-Reverse</Container>
            <Container direction='column'>Container Column</Container>
            <Container direction='column-reverse'>Container Column-Reverse</Container>
        </React.Fragment>)
    .add('Container alignContent', () =>
        <React.Fragment>
            <Container alignContent='stretch'>Container Stretch</Container>
            <Container alignContent='center'>Container Center</Container>
            <Container alignContent='flex-start'>Container Flex-Start</Container>
            <Container alignContent='flex-end'>Container Flex-End</Container>
            <Container alignContent='space-between'>Container Space-Between</Container>
            <Container alignContent='space-around'>Container Space-Around</Container>
        </React.Fragment>)
    .add('Container alignItems', () =>
        <React.Fragment>
            <Container alignItems='flex-start'>Container Flex-Start</Container>
            <Container alignItems='center'>Container Center</Container>
            <Container alignItems='flex-end'>Container Flex-End</Container>
            <Container alignItems='stretch'>Container Stretch</Container>
            <Container alignItems='baseline'>Container Baseline</Container>
        </React.Fragment>)