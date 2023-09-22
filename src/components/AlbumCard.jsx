import { Col } from "react-bootstrap";

function AlbumCard(props) {
  return (
    <Col className="text-center" id={props.id}>
      <a href="#">
        <img class="img-fluid" src={props.album.cover_medium} alt="1" />
      </a>
      <p>
        <a href="#">
          Album: "${props.album.title.length < 16 ? `${props.album.title}` : `${props.album.title.substring(0, 16)}...`}
          "<br />
        </a>
        <a href="#">Artist: ${props.artist.name}</a>
      </p>
    </Col>
  );
}

export default AlbumCard;
