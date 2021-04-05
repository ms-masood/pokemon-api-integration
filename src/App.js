import React, { Suspense, lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/index.jsx';
import LandingPage from './components/LandingPage';

import './App.scss';

function App() {
  return (
    <ErrorBoundary>
      <Route component={Header} />
      <Suspense fallback={<div />}>
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Suspense>
      <Route component={Footer} />
    </ErrorBoundary>
    // <div className="App">
    //   <header className="App-header">

    //   </header>
    // </div>
  );
}

export default withRouter(App);
