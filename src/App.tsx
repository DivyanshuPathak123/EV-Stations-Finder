import StationsList from "./Components/StationsList";
import TopNav from "./Components/TopNav";
import VehiclesList from "./Components/VehiclesList";

function App() {
  return (
    <>
      {/* <TopNav /> */}
      <StationsList fromHomePage={true} />
      <VehiclesList fromHomePage={true} />
    </>
  );
}

export default App;
