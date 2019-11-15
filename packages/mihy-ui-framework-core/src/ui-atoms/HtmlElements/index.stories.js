import React from 'react';
import { storiesOf } from '@storybook/react';

import Div from './Div/index'
import Form from './Form/index'
import Iframe from './Iframe/index'
import Main from './Main/index'

storiesOf('HTML Elements', module)
    .add('Div', () => <Div style={{ border: '1px solid #ccc' }}>Div</Div>)
    .add('Form', () => <Form >Form</Form>)
    .add('Iframe', () => <Iframe width='345px' height='345px' >Iframe</Iframe>)
    .add('Main', () => <Main >Main</Main>)