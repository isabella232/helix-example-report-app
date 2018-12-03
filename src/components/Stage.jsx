const PropTypes = require('prop-types');
const React = require('react');

class Stage extends React.Component {
  render() {
    const SingleStage = ({ data: { Headline } }) => <div>{Headline}</div>;
    return this.props.data.map((p, i) => <SingleStage key={i} data={p} />);
  }
}

Stage.propTypes = {
  data: PropTypes.array,
};

module.exports = Stage;
