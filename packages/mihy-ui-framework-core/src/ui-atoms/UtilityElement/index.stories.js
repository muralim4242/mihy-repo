import React from 'react';
import { storiesOf } from '@storybook/react';

import Break from './Break/index'
import Label from './Label/index'

storiesOf('ui-atoms : UtilityElement', module)
    .add('Break', () =>
        <React.Fragment>
            Hello World!
            <Break />
            <Break />
            Bye World!
        </React.Fragment>)
    .add('Label', () =>
        <React.Fragment>
            <Label label='Label Name' jsonPath='$.store.book[0].title' />
            <Break />
            <Label jsonPath='$.store.book[0].title' />
        </React.Fragment>)