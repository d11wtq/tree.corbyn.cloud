const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./App');

module.exports = ReactDOMServer.renderToString(<App />);
