import { Button, Col, Container, Row } from "react-bootstrap";
import BottomPlayer from "./BottomPlayer";
import LeftBar from "./LeftBar";
import TopLinks from "./TopLinks";

function ArtistPage() {
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
              <Col xs={12} md={10} lg={10} className="mt-5">
                <h2 className="titleMain">title here</h2>
                <div id="followers"></div>
                <div className="d-flex justify-content-center" id="button-container">
                  <Button className="btn btn-success mr-2 mainButton d-none" id="playButton">
                    PLAY
                  </Button>
                  <Button className="btn btn-outline-light mainButton d-none" id="followButton">
                    FOLLOW
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={10} md={10} lg={10} className="offset-1 p-0">
                <div className="mt-4 d-flex justify-content-start">
                  <h2 className="text-white font-weight-bold">Tracks</h2>
                </div>
                <div className="pt-5 mb-5">
                  <Row id="apiLoaded"></Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <BottomPlayer />
    </>
  );
}

export default ArtistPage;
