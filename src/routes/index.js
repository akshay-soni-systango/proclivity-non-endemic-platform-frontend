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
import CampaignForm from "../components/Campaign/CampaignDetail/EditCampaignForm";
import CampaignDetail from "../pages/CampaignDetailPage";
import CreateCampaign from "../components/Campaign/CampaignDetail/CampaignCreation";
import CampaignCompletion from "../components/Campaign/CampaignDetail/CampaignCreation-Completed";
// import Dropdown from "../components/Common/Dropdown/practiceDropdown";

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
            <Route path="/campaigns" element={<CampaignTable/>} />
            <Route path="/campaign/listview" element={<Listview />} />
            <Route path="/campaign/detail" element={<CampaignDetail/>} />
            <Route path="/campaign/edit" element={<CampaignForm/>} />
            <Route path="/campaign/create" element={<CreateCampaign/>} />
            <Route path="/campaign/complete" element={<CampaignCompletion/>} />
            {/* <Route path="/d" element={<Dropdown/>} /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};
export default Routes;
