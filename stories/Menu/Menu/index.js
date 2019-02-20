/* eslint-disable max-len */
import React from 'react';
import { Menu } from '@boa/components/Menu';
import Header from '../../base/header';
import Props from '../../base/props-table';
import Preview from '../../base/preview';
import doc from './doc.json';

// eslint-disable-next-line
export default ({ props }) => {
  return (
    <div style={{ padding: 20, background: 'white', textAlign: 'justify' }}>
      <Header {...props} component={Menu} doc={doc} />
      <Preview {...props} component={Menu} doc={doc} />
      <Props {...props} component={Menu} doc={doc} />
    </div>
  );
};