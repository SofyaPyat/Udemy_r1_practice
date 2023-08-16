import { Container, Row, Col, Carousel} from "react-bootstrap";
import CarouselTest from "./CarouselTest";
import TextControlsExample from "./FormTest";


const BootstrapTest = () => {
    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col>
                    <TextControlsExample/>
                </Col>
                <Col>
                    <CarouselTest/>
                </Col>
            </Row>
        </Container>
    )
}


export default BootstrapTest;