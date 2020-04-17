import React from 'react';
import { storiesOf } from '@storybook/react';

import MultiDownloadCard from './index'

storiesOf('ui-molecules : MultiDownloadCard', module)
    .add('MultiDownloadCard', () =>
        <MultiDownloadCard
        data={[{ title: 'Title 1', name: 'Name 1', link: 'https://www.youtube.com/', linkText: 'Link 1' },
        { title: 'Title 2', name: 'Name 2', link: 'https://www.youtube.com/', linkText: 'Link 2' }]}
        />)