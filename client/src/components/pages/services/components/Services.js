import React from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard
} from '@elastic/eui';

const _Card = {
  width: '200px'
};

export const ServicesChunk = () => (
  <EuiFlexGroup responsive>
    <EuiFlexItem>
      <EuiCard
        style={_Card}
        title="Institues"
        description="The information of all the colleges and universities of canada at the same point"
      />
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        style={_Card}
        title="Average Temperature"
        description="Average Temperature of surrounding location of each and every universitites"
      />
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        style={_Card}
        title="Scholarships"
        description="Anytype of services provided by Government of India for the students who wants to go to Canada for their Masters"
      />
    </EuiFlexItem>
  </EuiFlexGroup>
);
