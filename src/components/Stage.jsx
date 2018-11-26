var React = require('react');

class Stage extends React.Component {

    constructor() {
        super();
    }

    render() {

        const SingleStage = ({data: {Headline}}) => <div>{Headline}</div>;

        return this.props.data.map(p => <SingleStage data={p}/>);
    }
}

module.exports = Stage;