import React from 'react';
import {
  EuiFlexGrid,
  EuiFlexItem,
  EuiCard,
  EuiLink,
  EuiButton
} from '@elastic/eui';

import { globalTheme } from '../../../../theme';

const min = (a, b) => a < b ? a : b;

export const BlogList = ({ blogs }) => (
  <EuiFlexGrid columns={3} gutterSize="xl">
    {blogs.map(
      blog => (
        <EuiFlexItem style={{ background: globalTheme.color }} key={blog.title}>
          <EuiCard
            title={blog.title}
            description={`${blog.description.slice(0, min(blog.description.length, 100))}...`}
            footer={(
              <EuiLink href={blog.url} target="__blank">
                <EuiButton>
                  Read Full Blog.
                </EuiButton>
              </EuiLink>
            )}
          />
        </EuiFlexItem>
      )
    )}
  </EuiFlexGrid>
);
