import React from 'react'
import {
  EuiPageContent,
  EuiSpacer,
} from '@elastic/eui';

import { Title } from '../home/components/Title';
import { Team } from './components/Team';

export const AboutUs = () => (
  <EuiPageContent horizontalPosition="center" verticalPosition="center">
    <Title
      title="Team"
      description="All credit goes to these people"
    />

    <EuiSpacer size="l" />

    <Team />
  </EuiPageContent>
);
