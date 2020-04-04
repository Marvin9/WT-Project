import React from 'react';
import { EuiTitle, EuiText } from '@elastic/eui';
import PropTypes from 'prop-types';

export const Title = ({ title, description }) => (
  <>
    <EuiTitle>
      <h1 style={{ textAlign: 'center' }}>
        {title}
      </h1>
    </EuiTitle>
    <EuiText>
      <p style={{ textAlign: 'center' }}>
        {description}
      </p>
    </EuiText>
  </>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
