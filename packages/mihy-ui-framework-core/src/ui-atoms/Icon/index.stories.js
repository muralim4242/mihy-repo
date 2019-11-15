import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './index'

storiesOf('Icon', module)
    .add('Icon', () =>
        <React.Fragment>
            <Icon iconName='Primary Default Icon' color="primary" style={{ fontSize: 'default' }} />
            <br />
            <Icon iconName='Secondary Small Icon' color="secondary" style={{ fontSize: 'small' }} />
            <br />
            <Icon iconName='Action Large Icon' color="action" style={{ fontSize: 'large' }} />
            <br />
            <Icon iconName='Error Large Icon' color="error" style={{ fontSize: 'large' }} />
            <br />
            <Icon iconName='Disabled large Icon' color="disabled" style={{ fontSize: 'large' }} />
            <br />
        </React.Fragment>)
    .add('Component "Div" Icon', () => <Icon component='div' iconName='Component Div Icon' />)
