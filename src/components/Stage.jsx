const PropTypes = require('prop-types');
const React = require('react');
const {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row,
  Col,
  Container,
} = require('reactstrap');
require('./Stage.scss');

const getItems = (stages) => {
  return stages.map((stage) => {
    return {
      src: stage.Image,
      altText: stage.Headline,
      caption: stage.Headline,
    };
  });
};

let items = [];

class Stage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) { return; }
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) { return; }
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) { return; }
    this.setState({ activeIndex: newIndex });
  }

  render() {
    items = getItems(this.props.data);
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          key={item.src + item.caption}
          onExited={this.onExited}
          onExiting={this.onExiting}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Container>
        <Row>
          <Col>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators
                items={items} activeIndex={activeIndex}
                onClickHandler={this.goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev" directionText="Previous"
                onClickHandler={this.previous}
              />
              <CarouselControl
                direction="next" directionText="Next"
                onClickHandler={this.next}
              />
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

Stage.propTypes = {
  data: PropTypes.array,
};

module.exports = Stage;
