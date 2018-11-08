require('babel-register')({
  presets: ['react']
});

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');

function pre(payload) {
  payload.content.time = `${new Date()}`;
  
  const initialData = payload.content;
  payload.content.serialized = JSON.stringify(initialData);

  var html = ReactDOMServer.renderToString(
    React.createElement(Component, initialData)
  );
  payload.content.approot = html;
}

module.exports.pre = pre;
