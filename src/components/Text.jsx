const PropTypes = require('prop-types');
const React = require('react');
const { Container, Row, Col } = require('reactstrap');

class Text extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="html" dangerouslySetInnerHTML={{ __html: this.props.data }} />
          </Col>
        </Row>
      </Container>
    );
  }
}

Text.propTypes = {
  component: PropTypes.string,
  data: PropTypes.string,
};

module.exports = Text;
