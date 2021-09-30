import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Layout from './components/Layout';
import routes from './shared/routes';
import './App.css';

const App = ({ staticContext }) => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          {routes.map(({ path, fetchInitialData, component: C }) => {
            return (
              <Route
                exact
                key={path}
                path={path}
                render={() =>
                  <C
                    data={staticContext}
                    fetchInitialData={fetchInitialData}
                  />
                }
              />
            )
          })}
        </Switch>
      </Layout>
    </div>
  );
};

export default withRouter(App);
// export default App;