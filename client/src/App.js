import React from "react";
import { EuiPage, EuiPageBody } from '@elastic/eui';

import '@elastic/eui/dist/eui_theme_amsterdam_light.css';

import { Header, Body } from './components'

export default () => (
  <>
    <Header />
    <EuiPage>
      <EuiPageBody>
        <Body />
      </EuiPageBody>
    </EuiPage>
  </>
);
