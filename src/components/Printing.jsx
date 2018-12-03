const PropTypes = require('prop-types');
const React = require('react');

class Printing extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.component}</h4>
        <pre>{JSON.stringify(this.props.data, null, 2)}</pre>
      </div>
    );
  }
}

Printing.propTypes = {
  component: PropTypes.string,
  data: PropTypes.any,
};

module.exports = Printing;
