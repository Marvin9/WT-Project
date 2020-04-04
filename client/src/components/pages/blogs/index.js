import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  EuiLoadingSpinner,
  EuiPageContent,
  EuiTitle,
  EuiSpacer
} from '@elastic/eui';

import { getBlogs } from '../../../api';
import { BlogList } from './components/BlogList';

export const Blogs = () => {
  const [isLoading, changeLoading] = useState(true);
  const [err, changeError] = useState({ err: false, message: '' });
  const [blogs, changeBlogs] = useState([]);

  useEffect(() => {
    axios.get(getBlogs)
      .then(data => changeBlogs(data.data.data))
      .catch(err => changeError({ err: true, message: err.message }))
      .finally(() => changeLoading(false));
  });

  return (
    <>
      <EuiTitle size="s">
        <h1 style={{ textAlign: 'center' }}>
          Blogs
      </h1>
      </EuiTitle>

      <EuiSpacer size="m" />

      <EuiPageContent horizontalPosition="center">
        { isLoading && <EuiLoadingSpinner size="xl" /> }
        { !isLoading &&  <BlogList blogs={blogs} />}
      </EuiPageContent>
    </>
  )
};
