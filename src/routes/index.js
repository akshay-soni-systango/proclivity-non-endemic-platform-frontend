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
import Listview from "../pages/CampaignListviewHomePage";
import CampaignTable from "../components/Campaign/CampaignTable";
import CampaignDetailPage from "../components/Campaign/CampaignDetail";
import CampaignForm from "../components/Campaign/CampaignDetail/EditCampaignForm";

// const HomePage = React.lazy(() => import(  /* webpackChunkName: "home-page" */ '../pages/HomePage'));

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/home" element={<HomePage />} />
            <Route path="/audiences" element={<AudiencePage />} />
            <Route path="/analytics" element={<CampaignDetailCard />} />
            <Route path="/campaignlistview" element={<Listview />} />
            <Route path="/campaigndetail" element={<CampaignDetailPage/>} />
            <Route path="/campaigns" element={<CampaignTable/>} />
            <Route path="/form" element={<CampaignForm/>} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};
export default Routes;
