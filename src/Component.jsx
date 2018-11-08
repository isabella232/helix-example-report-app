var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  _handleClick: function() {
      alert();
  },
  render: function() {
      return (
          <div id="appRoot" data-json={this.props.initialData}>
              <h1>{this.props.title}</h1>
              <button onClick={this._handleClick}>Click Me</button>
          </div>
      );
  }
});