import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Awards from '../pages/Awards';
import Feedback from '../pages/Feedback';
import Information from '../pages/Information';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <Home title="Welcome to AnyCorp" />} />
    <Route exact path="/about" render={() => <About title="All About Us" />} />
    <Route
      exact
      path="/awards"
      render={() => <Awards title="AnyCorp Celebrates the Wins" />}
    />
    <Route
      exact
      path="/feedback"
      render={() => <Feedback title="AnyCorp Wants Your Feedback!" />}
    />
    <Route
      exact
      path="/information"
      render={() => <Information title="More information about AnyCorp" />}
    />
  </Switch>
);

export default hot(Routes);
