const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App');

/*! Get the element to mount to */
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('No root element found in DOM');
}

/*! Render the app into the DOM */
ReactDOM.hydrate(<App />, rootElement);
