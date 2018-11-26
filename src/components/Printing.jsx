var React = require('react');

class Printing extends React.Component {

    constructor() {
        super();
    }

    render() {


        return <div>
            <h4>{this.props.component}</h4>
            <pre>{JSON.stringify(this.props.data, null, 2)}</pre>
        </div>;
    }
}

module.exports = Printing;