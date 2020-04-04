import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { pages } from '../../pages';

export const Body = () => (
  <>
    <Switch>
      {pages.map(
        page => <Route key={page.path} exact={page.exact ? true : false} path={page.path} component={page.component} />
      )}
    </Switch>
  </>
);
