import React from 'react';
import { storiesOf } from '@storybook/react';

import TooltipWithChildren from './index'
import Tooltip from '../Tooltip/index'

storiesOf('TooltipWithChildren', module)
    .add('TooltipWithChildren', () => <TooltipWithChildren toolTipProps={{ leaveDelay: 300 }}>
        <Tooltip icon='Icon' val={{ value: 5, key: 5 }}></Tooltip>
        <Tooltip icon='Hey' val={{ value: 1, key: 1 }}></Tooltip>
    </TooltipWithChildren>)
