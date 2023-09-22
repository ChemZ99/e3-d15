import { Col, Container, Row } from "react-bootstrap";
import BottomPlayer from "./BottomPlayer";
import LeftBar from "./LeftBar";
import TopLinks from "./TopLinks";

function AlbumPage() {
  return (
    <>
      <Container fluid>
        <Row>
          <LeftBar />
          <Col xs={12} md={9} className="offset-md-3 mainPage">
            <Row className="mb-3">
              <TopLinks />
            </Row>
            <Row>
              <Col md={3} className="pt-5 text-center" id="img-container"></Col>
              <Col md={8} className="p-5">
                <Row>
                  <Col md={10} className="mb-5" id="trackList"></Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <BottomPlayer />
    </>
  );
}

export default AlbumPage;
