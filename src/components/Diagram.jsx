const PropTypes = require('prop-types');
const React = require('react');
const { Container, Row, Col } = require('reactstrap');


class Diagram extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="diagram">
              <h4>{this.props.component}</h4>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

Diagram.propTypes = {
  component: PropTypes.string,
  data: PropTypes.any,
};

module.exports = Diagram;
