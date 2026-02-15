import { Card } from "react-bootstrap";
import ImageWithFallback from "./ImageWithFallback";

function EvStationsList(props: any) {
  const { stationData, fromHomePage = false } = props;
  // console.log("====>> ", stationData);
  return (
    <div
      style={{
        display: "inline-block",
        marginRight: "0.5em",
        marginBottom: "0.5em",
      }}
    >
      <Card style={{ width: "20rem" }}>
        <ImageWithFallback
          src={stationData.photo}
          fallback="/img9.jpg"
          alt="Station"
        />
        <Card.Body>
          <Card.Title className="ellipsis" style={{ cursor: "pointer" }}>
            {stationData.name}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted ellipsis">
            {stationData.address_components.city}
            {", "}
            {stationData.address_components.state}
            {", "}
            {stationData.address_components.country}
          </Card.Subtitle>
          <Card.Link href={stationData.website} target="_blank">
            Website
          </Card.Link>
          <Card.Link href={stationData.place_link} target="_blank">
            Directions
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EvStationsList;
