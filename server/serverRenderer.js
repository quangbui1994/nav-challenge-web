import React from 'react';
import ReactDomServer from 'react-dom/server';
import serialize from "serialize-javascript";
import { StaticRouter, matchPath } from 'react-router-dom';
import path from 'path';
import fs from 'fs';
import reducer from '../src/store/reducers/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import db from '../build/DB.json';

import App from '../src/App';
import routes from '../src/shared/routes';

const serverRenderer = (req, res) => {
  const store = createStore(reducer, db.items)
  const activeRoute = routes.find(route => {
    return matchPath(req.url, {
      path: route.path,
      exact: true,
      strict: false
    })
  }) || {};
  const promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData() : Promise.resolve();
  promise.then(data => {
    const app = ReactDomServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <App staticContext={data}/>
        </StaticRouter>
      </Provider>
    );

    const indexFile = path.resolve('build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Something went wrong:');
      }

      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        .replace('<noscript>You need to enable JavaScript to run this app.</noscript>', '')
        .replace('<title>React App</title>', `<title>${activeRoute.name}</title>`)
      );
    });
  }).catch(e => {
    console.log(e)
  });
}

export default serverRenderer;