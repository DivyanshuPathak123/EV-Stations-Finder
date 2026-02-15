import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import EvStationsList from "./EvStationsList";
import stationsListData from "../data/StationsList.json";
import FullPageLoader from "./FullPageLoader";

function StationsList(props: { fromHomePage?: boolean }) {
  const { fromHomePage = false } = props;
  // const [stationsListData, setStationsList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // const { latitude, longitude } = position.coords;
      // console.log(`latitude = ${latitude}, -- longitude = ${longitude}`);
      const fetchData = async () => {
        // const url =
        //   "https://ev-charge-finder.p.rapidapi.com/search-by-coordinates-point?lat=37.359428&lng=-121.925337&limit=20";
        // const options = {
        //   method: "GET",
        //   headers: {
        //     "x-rapidapi-key":
        //       "c2f3ace598mshf0437464fc73d88p1304e9jsn8c4477422140",
        //     "x-rapidapi-host": "ev-charge-finder.p.rapidapi.com",
        //   },
        // };
        // setIsLoading(true);
        // try {
        //   const response = await fetch(url, options);
        //   const result = await response.json();
        //   console.log("Station list data -- ", result);
        //   setStationsList(result);
        // } catch (error) {
        //   console.error("Error in Station List Api -> ", error);
        // } finally {
        //   setIsLoading(false);
        // }
      };

      fetchData();
    });
  }, []);

  const showData = fromHomePage
    ? stationsListData && stationsListData?.data
      ? stationsListData.data.slice(0, 5)
      : []
    : stationsListData?.data;
  const hasData = showData && showData.length > 0;

  // console.log("showData.length -> ", showData.length);
  return (
    <Container style={{ marginTop: "0.5em" }}>
      <h5>Nearby EV Stations</h5>

      <FullPageLoader show={isLoading} />

      <div
        style={fromHomePage ? { overflowX: "auto", whiteSpace: "nowrap" } : {}}
      >
        {hasData ? (
          showData.map((sData, index) => (
            <EvStationsList
              stationData={sData}
              key={index}
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
            <Card.Link href="/stations">See More</Card.Link>
          </div>
        ) : null}
      </div>
    </Container>
  );
}

export default StationsList;
