import React from 'react';
import { EuiLink, EuiText } from '@elastic/eui';

export const initialState = {
  pageIndex: 0,
  pageSize: 5,
  pageSizeOptions: [5,  10],
};

export const render = [
  {
    field: 'name',
    name: 'University Name',
    render: name => (
      <EuiText>
        <b>
          {name}
        </b>
      </EuiText>
    ),
  },
  {
    field: 'province',
    name: 'City',
    render: province => province.split(' ')[0],
  },
  {
    field: 'province',
    name: 'Province',
    render: province => province.split(' ')[1],
  },
  {
    field: 'rank',
    name: 'Global Rank'
  },
  {
    field: 'fees',
    name: 'Fees range',
    render: fees => fees.split(' ').map(fee => `${fee}$`).join('-'),
  },
  {
    field: 'average_temp',
    name: 'Average temperature',
    render: temperature => `${temperature} C`,
  },
  {
    field: 'url',
    name: 'Visit',
    render: url => (
      <EuiLink href={url} target="__blank">
        Website
      </EuiLink>
    )
  }
];
