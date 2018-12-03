require('ignore-styles').default(['.sass', '.scss']);
require('./Article.scss');
const PropTypes = require('prop-types');
const React = require('react');

class Article extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this._handleClick = this._handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
    alert();
  }

  render() {
    return (
      <div className="article">
        <h1>{this.props.title}</h1>
        <button onClick={this.handleClick}>Click Me</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
};

module.exports = Article;
