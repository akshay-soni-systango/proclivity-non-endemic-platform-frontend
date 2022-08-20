import React from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from "react-router-dom";
import UserCard from "../components/Cards";
import Layout from "../components/Common/LayoutComponent";
import AudiencePage from "../pages/AudiencePage";
import HomePage from "../pages/HomePage";
import CampaignTable from "../components/CampaignTable";

// const HomePage = React.lazy(() => import(  /* webpackChunkName: "home-page" */ '../pages/HomePage'));

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/home" element={<HomePage />} />
            <Route path="/audiences" element={<AudiencePage />} />
            <Route path="/campaigns" element={<CampaignTable/>} />
            <Route path="/analytics" element={<UserCard />} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};
export default Routes;
