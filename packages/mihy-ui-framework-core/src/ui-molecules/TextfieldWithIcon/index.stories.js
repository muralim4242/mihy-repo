import React from 'react';
import { storiesOf } from '@storybook/react';

import TextfieldWithIcon from './index'

storiesOf('ui-molecules : TextfieldWithIcon', module)
    .add('TextfieldWithIcon', () =>
        <React.Fragment>
            <TextfieldWithIcon
                iconObj={{ position: 'end', iconName: 'IconName', label: 'IconLabel', color: 'green', onClick: () => { } }}
            ></TextfieldWithIcon>
            <TextfieldWithIcon
                iconObj={{ iconName: 'IconName', label: 'IconLabel', color: 'red', onClick: () => { } }}
            ></TextfieldWithIcon>
        </React.Fragment>)
