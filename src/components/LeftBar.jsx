import { Button, Col, Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo/Spotify_Logo.png";
import { useDispatch } from "react-redux";
import { FetchQuery, SaveInputAction } from "../redux/actions";

function LeftBar() {
  const dispatch = useDispatch();

  return (
    <Col xs={2}>
      <Navbar expand="md" className="navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
        <Container className="flex-column">
          <Navbar.Brand href="index.html">
            <img src={logo} alt="Spotify_Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />

          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav>
              <ul>
                <li>
                  <Nav.Link href="index.html">
                    <i className="fas fa-home fa-lg"></i>&nbsp; Home{" "}
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">
                    <i className="fas fa-book-open fa-lg"></i>&nbsp; Your Library
                  </Nav.Link>
                </li>
                <li>
                  <InputGroup className="mt-3">
                    <Form.Control
                      type="text"
                      className="form-control "
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      onChange={e => dispatch(SaveInputAction(e))}
                    />
                    <Button
                      className="btn btn-dark rounded-end"
                      variant="outline-secondary"
                      type="button"
                      id="button-addon1"
                      onClick={() => dispatch(FetchQuery())}
                    >
                      GO
                    </Button>
                  </InputGroup>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <div>
            <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
          </div>
        </div>
      </Navbar>
    </Col>
  );
}
export default LeftBar;
