import React, { useState } from 'react';
import {
  EuiBasicTable
} from '@elastic/eui';

import { searchByProvince } from '../../../../../utils/utils';
import { render } from './initials';

export const List = ({ data, province }) => {

  const resultList = searchByProvince(data, province);

  // const onTableChange = ({ page = {} }) => {
  //   const { index: pageIndex, size: pageSize } = page;

  //   setState({
  //     ...state,
  //     pageIndex,
  //     pageSize,
  //   });
  // };

  return (
    <EuiBasicTable
      items={resultList}
      columns={render}
    />
  );
};
