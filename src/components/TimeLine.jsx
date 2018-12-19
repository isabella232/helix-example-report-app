const React = require('react');
const { Container, Row, Col } = require('reactstrap');
const Timeline = require('react-image-timeline-sixteen').default;
require('../../node_modules/react-image-timeline-sixteen/dist/timeline.css');

const R = require('ramda');
const moment = require('moment');

// eslint-disable-next-line
const ipsum = 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna, eget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque sagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur id sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultrices libero. Mauris maximus, ligula vitae tincidunt scelerisque, ipsum magna euismod massa, eu vulputate enim est tempus sem. Maecenas id nibh vitae ante volutpat facilisis nec eget velit. Proin et ligula feugiat, auctor tellus sit amet, accumsan neque. Quisque porttitor lectus quis elit fermentum, a facilisis est suscipit. Integer consectetur dapibus nisi, ut lacinia enim vulputate vitae. Curabitur id diam mauris. Duis dictum, dolor at porttitor aliquet, justo libero mattis magna, eu pellentesque augue mauris eget erat. Pellentesque lacinia velit nec ullamcorper mollis. Pellentesque lacus tortor, maximus eget tincidunt non, luctus scelerisque odio. Suspendisse potenti. Etiam vel augue blandit, auctor sem sit amet, imperdiet dolor. Ut a quam laoreet, feugiat orci sed, feugiat nulla. Nulla gravida nisi eu ex egestasdapibus.';

const cities = [
  {
    title: 'Berlin, Germany',
    imageUrl: 'https://s3.amazonaws.com/aaron-cdn/react-image-timeline/berlin.jpg',
  },
  {
    title: 'Chicago, Illinois',
    imageUrl: 'https://s3.amazonaws.com/aaron-cdn/react-image-timeline/chicago.jpg',
  },
  {
    title: 'Cairo, Egypt',
    imageUrl: 'https://s3.amazonaws.com/aaron-cdn/react-image-timeline/egypt.jpg',
  },
  {
    title: 'London, England',
    imageUrl: 'https://s3.amazonaws.com/aaron-cdn/react-image-timeline/london.jpg',
  },
];

function randomLengthText() {
  const minLength = 50;
  return ipsum.slice(0, Math.random() * (R.length(ipsum) - minLength) + minLength);
}

function getSampleData() {
  let offset = 0;
  const orderedCities = R.map((city) => {
    offset += Math.random() * 100;
    return R.merge({
      date: moment('2013-02-08').add(offset, 'days'),
      text: randomLengthText(),
      buttonText: 'Read More',
      onClick: () => {},
      extras: {
        foo: '#Travel',
      },
    }, city);
  }, cities);
  return orderedCities;
}

class TimeLine extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Timeline events={getSampleData(true)} />
          </Col>
        </Row>
      </Container>
    );
  }
}

module.exports = TimeLine;
