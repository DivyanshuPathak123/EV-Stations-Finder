import { createBrowserRouter } from "react-router";

import App from "../App";
import StationsList from "../Components/StationsList";
import VehiclesList from "../Components/VehiclesList";
import TopNav from "../Components/TopNav";

const TopNavComp = (props: any) => {
  return (
    <>
      <TopNav />
      {props.children}
    </>
  );
};

const SApp = () => {
  return (
    <>
      <TopNavComp>
        <App />
      </TopNavComp>
    </>
  );
};

const SStationsList = () => {
  return (
    <>
      <TopNavComp>
        <StationsList />
      </TopNavComp>
    </>
  );
};

const SVehiclesList = () => {
  return (
    <>
      <TopNavComp>
        <VehiclesList />
      </TopNavComp>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    Component: SApp,
  },
  {
    path: "/stations",
    Component: SStationsList,
  },
  {
    path: "/vehicles",
    Component: SVehiclesList,
  },
]);

export default router;
