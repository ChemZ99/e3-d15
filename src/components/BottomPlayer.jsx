import { Col, Container, Row } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/Shuffle.png";
import previous from "../assets/playerbuttons/Previous.png";
import play from "../assets/playerbuttons/Play.png";
import next from "../assets/playerbuttons/Next.png";
import repeat from "../assets/playerbuttons/Repeat.png";

function BottomPlayer() {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col lg={10} className="offset-lg-2">
          <Row>
            <Col xs={6} md={4} lg={2} className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <Row>
                <Col xs={2} href="#">
                  <img src={shuffle} alt="shuffle" height={10} style={{ opacity: 0.5 }} />
                </Col>
                <Col xs={2} href="#">
                  <img src={previous} alt="previous" height={10} style={{ opacity: 0.5 }} />
                </Col>
                <Col xs={2} href="#">
                  <img src={play} alt="play" height={20} style={{ opacity: 0.5 }} />
                </Col>
                <Col xs={2} href="#">
                  <img src={next} alt="next" height={10} style={{ opacity: 0.5 }} />
                </Col>
                <Col xs={2} href="#">
                  <img src={repeat} alt="repeat" height={10} style={{ opacity: 0.5 }} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col xs={8} md={6}>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default BottomPlayer;
