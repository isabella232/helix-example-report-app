const React = require('react');

class TimeLine extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className="timeline">
        <h4>TimeLine</h4>
        <button onClick={this.handleClick}>Click Me</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

module.exports = TimeLine;
