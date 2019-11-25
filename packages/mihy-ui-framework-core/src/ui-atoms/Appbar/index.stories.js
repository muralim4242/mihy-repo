import React from 'react';
import { storiesOf } from '@storybook/react';

import Appbar from './index'

storiesOf('ui-atoms : Appbar', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('AppBar Absolute', () =>
        <React.Fragment>
            <Appbar position="absolute" color="default">AppBar</Appbar>
            <div style={{ height: "120vh" }}></div>
        </React.Fragment>)

    .add('AppBar Fixed', () =>
        <React.Fragment>
            <Appbar position="fixed" color="inherit">AppBar</Appbar>
            <div style={{ height: "120vh" }}></div>
        </React.Fragment>)

    .add('AppBar Relative', () =>
        <React.Fragment>
            <Appbar position="relative" color="primary">AppBar</Appbar>
            <div style={{ height: "120vh" }}></div>
        </React.Fragment>)

    .add('AppBar Static', () =>
        <React.Fragment>
            <Appbar position="static" color="primary">AppBar</Appbar>
            <div style={{ height: "120vh" }}></div>
        </React.Fragment>)

    .add('AppBar Sticky', () => <React.Fragment>
        <Appbar position="sticky" color="secondary">AppBar</Appbar>
        <div style={{ height: "120vh" }}></div></React.Fragment>)