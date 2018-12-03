const React = require('react');

class TimeLine extends React.Component {
  render() {
    return (<div>
      <h4>TimeLine</h4>
      <pre>{JSON.stringify(this.props, null, 2)}</pre>
    </div>);
  }
}

module.exports = TimeLine;
