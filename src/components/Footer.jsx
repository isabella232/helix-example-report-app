const React = require('react');
const { Container, Row, Col } = require('reactstrap');
require('./Footer.scss');

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-bg">
        <Container className="footer">
          <Row>
            <Col>
              <div>
                    Footer
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
module.exports = Footer;
