const PropTypes = require('prop-types');
const React = require('react');

class Diagram extends React.Component {
  render() {
    return (
      <div className="printing">
        <h4>{this.props.component}</h4>
      </div>
    );
  }
}

Diagram.propTypes = {
  component: PropTypes.string,
  data: PropTypes.any,
};

module.exports = Diagram;
