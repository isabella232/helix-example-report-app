const PropTypes = require('prop-types');
const React = require('react');
const { Container, Row, Col } = require('reactstrap');

class Printing extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="printing">
              <h4>{this.props.component}</h4>
              <pre>{JSON.stringify(this.props.data, null, 2)}</pre>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

Printing.propTypes = {
  component: PropTypes.string,
  data: PropTypes.any,
};

module.exports = Printing;
