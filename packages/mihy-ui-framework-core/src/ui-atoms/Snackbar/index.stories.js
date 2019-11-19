import React from 'react';
import { storiesOf } from '@storybook/react';

import Snackbar from './index'

storiesOf('Snackbar', module)
    .add('Snackbar Success', () => <Snackbar open={true} variant={"success"} onClose={() => console.log("test")} message='Success'>Hi</Snackbar>)
    .add('Snackbar Error', () => <Snackbar open={true} variant={"error"} onClose={() => console.log("test")} message='Error'>Hi</Snackbar>)
    .add('Snackbar Warning', () => <Snackbar open={true} variant={"warning"} onClose={() => console.log("test")} message='Warning'>Hi</Snackbar>)
    .add('Snackbar Info', () => <Snackbar open={true} variant={"info"} onClose={() => console.log("test")} message='Info'>Hi</Snackbar>)