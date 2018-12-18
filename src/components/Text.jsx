const PropTypes = require('prop-types');
const React = require('react');

class Text extends React.Component {

  render() {
    return (
      <div className="html" dangerouslySetInnerHTML={{ __html: this.props.data }} />
    );
  }
}

Text.propTypes = {
  component: PropTypes.string,
  data: PropTypes.string,
};

module.exports = Text;
