import React from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard
} from '@elastic/eui';


export const Team = () => (
  <EuiFlexGroup gutterSize="l">
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image="https://i.ibb.co/kHTNwDh/Webp-net-resizeimage-3.jpg"
        title="Utsav Vadhar"
        description="Front-End Developer"
      />
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image="https://i.ibb.co/Z2W6XFD/Webp-net-resizeimage-4.jpg"
        title="Mayursinh Sarvaiya"
        description="Full stack developer"
      />
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image="https://i.ibb.co/y4jgtdf/Webp-net-resizeimage-2.jpg"
        title="Krunal Zalavadiya"
        description="Data Scientist"
      />
    </EuiFlexItem>
  </EuiFlexGroup>
);
