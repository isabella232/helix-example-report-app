
var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOMServer = require('react-dom/server');



const asd = createReactClass({
  render: function() {
      return React.createElement('h1', null, 'Hello World!');
  }
});

function pre(payload) {
  payload.content.time = `${new Date()}`;
  var html = ReactDOMServer.renderToString(
    React.createElement(asd)
  );
  payload.content.approot = html;
}

module.exports.pre = pre;
