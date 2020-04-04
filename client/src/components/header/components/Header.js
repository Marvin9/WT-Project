import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiTitle,
  EuiLink
} from '@elastic/eui';

import { _Links, theme } from '../constants';

import {
  _Header,
  _Logo,
  _Link,
  _Active_Link
} from '../styles/header.styles';

export const Header = () => (
  <EuiHeader style={_Header}>
    <EuiHeaderSectionItem style={_Logo}>
      <EuiTitle size="l">
        <h1>
          <span style={{ color: theme.color }}>Study</span>
          {' '}
          Abroad
        </h1>
      </EuiTitle>
    </EuiHeaderSectionItem>

    <EuiHeaderSection side="right">
      { _Links.map(
        Chunk => (
          <EuiLink key={Chunk.path}>
            <NavLink to={Chunk.path} exact activeStyle={_Active_Link} style={_Link}>
              {Chunk.title}
            </NavLink>
          </EuiLink>
        )
      ) }
    </EuiHeaderSection>
  </EuiHeader>
);
