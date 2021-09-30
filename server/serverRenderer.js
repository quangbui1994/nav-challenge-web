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

    // const indexFile = path.resolve(__dirname, 'build/index.html');
    // fs.readFile(indexFile, 'utf8', (err, data) => {
    //   if (err) {
    //     console.error('Something went wrong:', err);
    //     return res.status(500).send('Oops, better luck next time!');
    //   }

    //   return res.send(
    //     data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    //   );
    // });
    res.send(`
    <!doctype html>
    <html lang="en">
       <head>
          <meta charset="utf-8"/>
          <link rel="icon" href="/favicon.ico"/>
          <meta name="viewport" content="width=device-width,initial-scale=1"/>
          <meta name="theme-color" content="#000000"/>
          <meta name="description" content="Web site created using create-react-app"/>
          <link rel="apple-touch-icon" href="/logo192.png"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
          <link rel="manifest" href="/manifest.json"/>
          <title>${activeRoute.name}</title>
          <link href="/static/css/main.1d69f8d4.chunk.css" rel="stylesheet">
          <script>
            window.__INITIAL_DATA__ = ${serialize(db.items)}
          </script>
       </head>
       <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root">${app}</div>
          <script>!function(e){function t(t){for(var n,o,c=t[0],i=t[1],f=t[2],s=0,p=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(l&&l(t);p.length;)p.shift()();return u.push.apply(u,f||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={2:0},a={2:0},u=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{5:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="static/css/"+({}[e]||e)+"."+{0:"31d6cfe0",4:"31d6cfe0",5:"423f4cf7",6:"31d6cfe0",7:"31d6cfe0"}[e]+".chunk.css",a=c.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var f=(l=u[i]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===n||f===a))return t()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){var l;if((f=(l=s[i]).getAttribute("data-href"))===n||f===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],p.parentNode.removeChild(p),r(u)},p.href=a,document.getElementsByTagName("head")[0].appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+"static/js/"+({}[e]||e)+"."+{0:"db8096f1",4:"ef7c59d9",5:"62a4fb56",6:"55841171",7:"cdefed65"}[e]+".chunk.js"}(e);var f=new Error;u=function(t){i.onerror=i.onload=null,clearTimeout(s);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=this["webpackJsonpmy-ssr-app"]=this["webpackJsonpmy-ssr-app"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=f;r()}([])</script><script src="/static/js/3.423d3f8c.chunk.js"></script><script src="/static/js/main.7bb53db9.chunk.js"></script>
       </body>
    </html>
    `)
  }).catch(e => {
    console.log(e)
  });
}

export default serverRenderer;