import React from 'react';
import { storiesOf } from '@storybook/react';

import List from './List/index'
import ListItem from './ListItem/index'
import ListItemIcon from './ListItemIcon/index'
import ListItemText from './ListItemText/index'


storiesOf('ui-atoms : Lists', module)
    .add('List', () =>
        <React.Fragment>
            <List component='ul'>List</List>
            <List component='ul' dense>Dense List</List>
            <List component='ul' disablePadding>disablePadding List</List>
        </React.Fragment>)
    .add('ListItem', () =>
        <React.Fragment>
            <ListItem >ListItem</ListItem>
            <ListItem dense>Dense ListItem</ListItem>
            <ListItem disabled>Disabled ListItem</ListItem>
            <ListItem disableGutters>disableGutters ListItem</ListItem>
            <ListItem divider>divider ListItem</ListItem>
        </React.Fragment>)

    // .add('ListItemIcon', () => <ListItemIcon >ListItemIcon</ListItemIcon>)
    
    
    .add('ListItemText', () =>
        <React.Fragment>
            <ListItemText >ListItemText</ListItemText>
            <ListItemText disableTypography>disableTypography ListItemText</ListItemText>
            <ListItemText inset>inset ListItemText</ListItemText>
            <ListItemText primary>primary ListItemText</ListItemText>
            <ListItemText primaryTypographyProps>primaryTypographyProps ListItemText</ListItemText>
            <ListItemText secondary>secondary ListItemText</ListItemText>
            <ListItemText secondaryTypographyProps>secondaryTypographyProps ListItemText</ListItemText>
        </React.Fragment>)

