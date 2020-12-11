import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default Routes;
