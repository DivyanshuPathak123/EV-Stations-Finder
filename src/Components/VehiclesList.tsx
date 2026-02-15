import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

import FullPageLoader from "./FullPageLoader";
import vehiclesListData from "../data/VehiclesList.json";
import EvVehiclesList from "./EvVehiclesList";

function VehiclesList(props: { fromHomePage?: boolean }) {
  const { fromHomePage = false } = props;
  const [isLoading, setIsLoading] = useState(false);
  // const [vehiclesListData, setVehiclesList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // const url =
      //   "https://ev-stations.p.rapidapi.com/vehicles?make=Tesla&limit=20";
      // const options = {
      //   method: "GET",
      //   headers: {
      //     "x-rapidapi-key":
      //       "c2f3ace598mshf0437464fc73d88p1304e9jsn8c4477422140",
      //     "x-rapidapi-host": "ev-stations.p.rapidapi.com",
      //   },
      // };
      // setIsLoading(true);
      // try {
      //   const response = await fetch(url, options);
      //   const result = await response.json();
      //   console.log("Vehicles list data -- ", result);
      //   setVehiclesList(result);
      // } catch (error) {
      //   console.error("Error in Vehicles List Api -> ", error);
      // } finally {
      //   setIsLoading(false);
      // }
    };

    fetchData();
  }, []);

  const showData = fromHomePage
    ? vehiclesListData && vehiclesListData?.results
      ? vehiclesListData.results.slice(0, 5)
      : []
    : vehiclesListData?.results;

  const hasData = showData && showData.length > 0;

  return (
    <Container style={{ marginTop: "0.5em" }}>
      <h5>Popular EV Vehicles</h5>

      <FullPageLoader show={isLoading} />

      <div
        style={fromHomePage ? { overflowX: "auto", whiteSpace: "nowrap" } : {}}
      >
        {hasData ? (
          showData.map((vData) => (
            <EvVehiclesList
              vehiclesData={vData}
              key={vData.id}
              fromHomePage={fromHomePage}
            />
          ))
        ) : (
          <h5>No Data</h5>
        )}

        {hasData && fromHomePage ? (
          <div
            style={{
              display: "inline-block",
              marginRight: "0.5em",
              marginLeft: "0.5em",
            }}
          >
            <Card.Link href="/vehicles">See More</Card.Link>
          </div>
        ) : null}
      </div>
    </Container>
  );
}

export default VehiclesList;
