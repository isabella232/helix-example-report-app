var React = require('react');

class Article extends React.Component {
    
    constructor() {
        super();
        this.state = {
            count: 0,
        }
        this._handleClick = this._handleClick.bind(this);
    }
    
    _handleClick() {
        this.setState({
            count: this.state.count+1
        })
        alert();
    }
    
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <button onClick={this._handleClick}>Click Me</button>
            <span>{this.state.count}</span>
            </div>
        );
    }
};

module.exports = Article;