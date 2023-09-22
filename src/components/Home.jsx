import { Col, Container, Row } from "react-bootstrap";
import LeftBar from "./LeftBar";
import BottomPlayer from "./BottomPlayer";
import TopLinks from "./TopLinks";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtist } from "../redux/actions";
import { useEffect } from "react";

function Home() {
  let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];

  let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  const dispatch = useDispatch();

  //const songs = useSelector(state => state.queryData.content);
  const rockCards = useSelector(state => state.homeCardData.rock);
  const popCards = useSelector(state => state.homeCardData.pop);
  const hiphopCards = useSelector(state => state.homeCardData.hiphop);

  useEffect(() => {
    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];

    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    for (let j = 0; j < rockRandomArtists.length; j++) dispatch(fetchArtist(rockRandomArtists[j], "rock"));

    for (let k = 0; k < popRandomArtists.length; k++) dispatch(fetchArtist(popRandomArtists[k], "pop"));

    for (let l = 0; l < hipHopRandomArtists.length; l++) dispatch(fetchArtist(hipHopRandomArtists[l], "hiphop"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <LeftBar />
          <Col xs={12} md={9} className="offset-md-3 mainPage">
            <Row>
              <TopLinks />
            </Row>
            <Row>
              <Col xs={10}>
                <div id="searchResults" style={{ display: "none" }}>
                  <h2>Search Results</h2>
                  <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="rock">
                  <h2>Rock Classics</h2>
                  <Row
                    className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="rockSection"
                  ></Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="pop">
                  <h2>Pop Culture</h2>
                  <Row
                    className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="popSection"
                  ></Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="hiphop">
                  <h2>#HipHop</h2>
                  <Row
                    className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="hipHopSection"
                  ></Row>
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

export default Home;
