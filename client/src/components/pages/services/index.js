import React from 'react';
import { EuiPageContent, EuiSpacer } from '@elastic/eui';

import { Title } from '../home/components/Title';

import { ServicesChunk } from './components/Services';

export const Services = () => {
  document.title = 'Study Abroad - Services';
  return (
    <EuiPageContent verticalPosition="center" horizontalPosition="center">
      <Title
        title="Services"
        description="Services we provide"
      />

      <EuiSpacer size="l" />

      <ServicesChunk />
    </EuiPageContent>
  );
}
