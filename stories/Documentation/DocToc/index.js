/* eslint-disable max-len */
import React from 'react';
import { DocToc } from '@boa/components/DocToc';
import Header from '../../base/header';
import Props from '../../base/props-table';
import Preview from '../../base/preview';
import doc from './doc.json';

// eslint-disable-next-line
export default ({ props }) => {
  return (
    <div style={{ padding: 20, background: 'white', textAlign: 'justify' }}>
      <Header {...props} component={DocToc} doc={doc} />
      <Preview {...props} component={DocToc} doc={doc} />
      <Props {...props} component={DocToc} doc={doc} />
    </div>
  );
};