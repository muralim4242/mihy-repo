import React from 'react';
import { storiesOf } from '@storybook/react';

import Drawer from './index'

storiesOf('Drawer', module)
    .add('Temporary Left Drawer', () => <Drawer anchor='left' open onClose >Left Drawer</Drawer>)
    .add('Temporary Right Drawer', () => <Drawer anchor='right' open onClose={function (event) { return; }}>Right Drawer</Drawer>)
    .add('Temporary Top Drawer', () => <Drawer anchor='top' open='true' onClose={event => event}>Top Drawer</Drawer>)
    .add('Temporary Bottom Drawer', () => <Drawer anchor='bottom' open onClose>Bottom Drawer</Drawer>)
