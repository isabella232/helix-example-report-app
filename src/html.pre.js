require('babel-register')({
  presets: ['react']
});

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');

function pre(payload) {
  payload.content.time = `${new Date()}`;
  var html = ReactDOMServer.renderToString(
    React.createElement(Component)
  );
  payload.content.approot = html;
}

module.exports.pre = pre;
