import { Carousel, ExampleCarouselImage } from "react-bootstrap";

function CarouselTest() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        className="d-clock w-100"
        src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?format=pjeg&auto=webp&crop=16:9"
        alt="first slide"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-clock w-100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOgrY0uAsrXO4av-gi4m1YG3eXuFF-EhMv-kz6KW50RUp-tXoBFnuxJQCi5I9uyUuFywA&usqp=CAU"
        alt="second slide"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselTest;