import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={() => <h1>Hello</h1>} />
    </Switch>
);

export default Routes;
