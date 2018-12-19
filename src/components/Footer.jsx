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
                <h4>Information</h4>
                <ul>
                  <li><a href="#">One</a></li>
                  <li><a href="#">Two</a></li>
                  <li><a href="#">Three</a></li>
                </ul>
              </div>
            </Col>
            <Col>
              <div>
                <h4>References</h4>
                <ul>
                  <li><a href="#">One</a></li>
                  <li><a href="#">Two</a></li>
                  <li><a href="#">Three</a></li>
                  <li><a href="#">Four</a></li>
                  <li><a href="#">Five</a></li>
                </ul>
              </div>
            </Col>
            <Col>
              <div>
                <h4>Partners</h4>
                <ul>
                  <li><a href="#">One</a></li>
                  <li><a href="#">Two</a></li>
                  <li><a href="#">Three</a></li>
                  <li><a href="#">Four</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
module.exports = Footer;
