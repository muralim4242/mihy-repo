import React from 'react';
import { storiesOf } from '@storybook/react';

import Phonenumber from './Phonenumber/index'
import Text from './Text/index'

storiesOf('TextFields', module)
    .add('Phonenumber', () =>
        <React.Fragment>
            <Phonenumber
                id='number'
                label='Phone Number'
                value='Phone Number'
                fullWidth={false}
            ></Phonenumber>
            <Phonenumber
                id='number'
                label='Phone Number'
                value='Phone Number'
            ></Phonenumber>
        </React.Fragment>)

    .add('Text', () =>
        <React.Fragment>
            <Text
                id='text'
                label='Text'
                value='Text'
            />
            <Text
                id='text'
                label='Text'
                value='Standard Variant'
                variant='standard'
            />
            <Text
                id='text'
                label='Text'
                value='Outlined Variant'
                variant='outlined'
            />
            <Text
                id='text'
                label='Text'
                value='Filled Variant'
                variant='filled'
            />
            <Text
                id='text'
                label='Text'
                value='Disabled'
                disabled
            />
            <Text
                id='text'
                label='Text'
                value='Primary'
                color='primary'
            />
            <Text
                id='text'
                label='Text'
                value='Secondary'
                color='secondary'
            />
        </React.Fragment>)