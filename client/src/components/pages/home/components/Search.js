import React, { useState } from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiSelect,
  EuiButton,
} from '@elastic/eui';

import { provinceExtraction } from '../../../../utils/utils';

export const Search = ({ data, activateSearch }) => {
  const provinces = provinceExtraction(data);
  const options = [
    {
      value: 'all',
      text: 'All'
    },
    ...
    provinces.map(
      province => ({
        value: province,
        text: province
      })
    )];

  const [selectedProvince, changeProvince] = useState(options[0].value);
  const changeSelection = e => changeProvince(e.target.value);

  return (
    <>
      <EuiSelect
        options={options}
        value={selectedProvince}
        onChange={changeSelection}
        prepend="Select Province"
      />
      <br />
      <EuiButton onClick={() => activateSearch(selectedProvince)}>
        Search Universities
      </EuiButton>
    </>
  );
};
