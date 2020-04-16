import React from 'react';
import { storiesOf } from '@storybook/react';

import DocumentList from './index'

storiesOf('ui-molecules : DocumentList', module)
    .add('DocumentList', () =>
        <DocumentList
            documents={[
                { uploaded: true, name: 'Doc Name 1', },
                { uploaded: false, name: 'Doc Name 2' },
                { uploaded: true, name: 'Doc Name 3', required: true, fileName: 'Document Filename' },
                { uploaded: false, name: 'Doc Name 4' }]}
        ></DocumentList>)