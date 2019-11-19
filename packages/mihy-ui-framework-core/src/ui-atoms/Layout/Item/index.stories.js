import React from 'react';
import { storiesOf } from '@storybook/react';

import Item from './index'

storiesOf('Layout Item', module)
    .add('Item Justify', () =>
        <React.Fragment>
            <Item justify='flex-start'>Item Flex-Start</Item>
            <Item justify='center'>Item Center</Item>
            <Item justify='flex-end'>Item Flex-End</Item>
            <Item justify='space-between'>Item Space-Between</Item>
            <Item justify='space-around'>Item Space-Around</Item>
            <Item justify='space-evenly'>Item Space-Evenly</Item>
        </React.Fragment>)
    .add('Item Direction', () =>
        <React.Fragment>
            <Item direction='row'>Item Row</Item>
            <Item direction='row-reverse'>Item Row-Reverse</Item>
            <Item direction='column'>Item Column</Item>
            <Item direction='column-reverse'>Item Column-Reverse</Item>
        </React.Fragment>)
    .add('Item alignContent', () =>
        <React.Fragment>
            <Item alignContent='stretch'>Item Stretch</Item>
            <Item alignContent='center'>Item Center</Item>
            <Item alignContent='flex-start'>Item Flex-Start</Item>
            <Item alignContent='flex-end'>Item Flex-End</Item>
            <Item alignContent='space-between'>Item Space-Between</Item>
            <Item alignContent='space-around'>Item Space-Around</Item>
        </React.Fragment>)
    .add('Item alignItems', () =>
        <React.Fragment>
            <Item alignItems='flex-start'>Item Flex-Start</Item>
            <Item alignItems='center'>Item Center</Item>
            <Item alignItems='flex-end'>Item Flex-End</Item>
            <Item alignItems='stretch'>Item Stretch</Item>
            <Item alignItems='baseline'>Item Baseline</Item>
        </React.Fragment>)