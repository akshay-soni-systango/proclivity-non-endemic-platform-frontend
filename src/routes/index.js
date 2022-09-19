import React from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Layout from "../components/Common/LayoutComponent";
import AudiencePage from "../pages/AudiencePage";
import HomePage from "../pages/HomePage";
import CampaignDetailCard from "../components/Cards/campaignDetail";
import CampaignForm from "../components/Campaign/CampaignDetail/EditCampaignForm";
import CampaignDetail from "../pages/Campaigns/Detail";
import CampaignCompletion from "../components/Campaign/CampaignDetail/CampaignCreation";
import AdminPage from "../pages/AdminPage";
import CampaignViewReport from "../components/Campaign/CampaignDetail/ViewReports";
import CampaignHomePage from "../pages/Campaigns/Overview";
// const HomePage = React.lazy(() => import(  /* webpackChunkName: "home-page" */ '../pages/HomePage'));

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/home" element={<HomePage />} />
            <Route path="/audiences" element={<AudiencePage />} />
            <Route path="/admin" element={<AdminPage/>} />
            <Route path="/analytics" element={<CampaignDetailCard />} />
            <Route path="/campaign/home" element={<CampaignHomePage />} />
            <Route path="/campaign/detail" element={<CampaignDetail/>} />
            <Route path="/campaign/edit" element={<CampaignForm/>} />
            <Route path="/campaign/complete" element={<CampaignCompletion/>} />
            <Route path="/campaign/report" element={<CampaignViewReport/>} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};
export default Routes;
