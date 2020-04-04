import React, { useState, useEffect } from 'react';
import { EuiPageContent, EuiSpacer, EuiLoadingSpinner } from '@elastic/eui';
import axios from 'axios';

import { Title } from './components/Title';
import { Search } from './components/Search';
import { List } from './components/List/List';

import { get } from '../../../api';

export const Home = () => {
  const [data, changeData] = useState([]);
  const [error, changeError] = useState(false);
  const [loading, changeLoading] = useState(true);

  const [search, changeSearch] = useState(false);
  const [searchProvince, setSearchProvince] = useState('');

  useEffect(() => {
    axios.get(get)
      .then(data => changeData(data.data.data)/*:P*/ )
      .catch(err => changeError(true))
      .finally(() => changeLoading(false));
  }, []);

  const activateSearch = province => {
    setSearchProvince(province);
    changeSearch(true);
  };

  document.title = 'Study Abroad - Home';

  return (
    <>
      <EuiPageContent horizontalPosition="center">
        <Title
          title="STUDY IN CANADA"
          description="Get information of top Universities and Colleges"
        />
      </EuiPageContent>

      <EuiSpacer size="m" />

      <EuiPageContent horizontalPosition="center">
        {loading && <EuiLoadingSpinner size="m" />}
        {!loading && <Search data={data} activateSearch={activateSearch} />}
      </EuiPageContent>

      <EuiSpacer size="s" />

      {
        search && (
          <EuiPageContent horizontalPosition="center">
            { search && <List data={data} province={searchProvince} /> }
          </EuiPageContent>
        )
      }
    </>
  );
}
