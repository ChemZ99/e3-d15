import { Col } from "react-bootstrap";

function TopLinks() {
  return (
    <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
      <a className="text-decoration-none" href="#">
        TRENDING
      </a>
      <a className="text-decoration-none" href="#">
        PODCAST
      </a>
      <a className="text-decoration-none" href="#">
        MOODS AND GENRES
      </a>
      <a className="text-decoration-none" href="#">
        NEW RELEASES
      </a>
      <a className="text-decoration-none" href="#">
        DISCOVER
      </a>
    </Col>
  );
}

export default TopLinks;
