import { Card } from "react-bootstrap";
import ImageWithFallback from "./ImageWithFallback";

function EvVehiclesList(props: any) {
  const { vehiclesData, fromHomePage = false } = props;
  // console.log("====>> ", vehiclesData);
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
          src={vehiclesData.thumbnail_url}
          fallback="/img20.png"
          alt="Station"
          height="150px"
        />
        <Card.Body>
          <Card.Title className="ellipsis" style={{ cursor: "pointer" }}>
            {vehiclesData.make}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted ellipsis">
            {vehiclesData?.model}
            {", "}
            {vehiclesData?.drivetrain}
            {", "}
            {vehiclesData?.category}
          </Card.Subtitle>
          <Card.Link href={vehiclesData.manufacturer_url} target="_blank">
            Website
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EvVehiclesList;
