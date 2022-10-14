import React from "react";
import { Switch } from "react-router-dom";
import AudiencePage from "../pages/AudiencePage";
import HomePage from "../pages/HomePage";
import CampaignDetailCard from "../components/Cards/campaignDetail";
import CampaignForm from "../components/Campaign/CampaignDetail/EditCampaignForm";
import CampaignDetail from "../pages/Campaigns/Detail";
import CampaignCompletion from "../components/Campaign/CampaignDetail/CampaignCreation";
import AdminPage from "../pages/AdminPage";
import CampaignViewReport from "../components/Campaign/CampaignDetail/ViewReports";
import CampaignHomePage from "../pages/Campaigns/Overview";
import EditMember from "../components/Admin/EditMember";
import PageNotFound from "../pages/PageNotFound";
import PrivateRoute from "./ProtectedRouting/PrivateRoute";
import PublicRoute from "./ProtectedRouting/PublicRoute";
import LoginPage from "../pages/Login";
import NewMember from "../components/Admin/Member/NewMember";
import ForgotPassword from "../pages/Login/forgotPassword";
// const HomePage = React.lazy(() => import(  /* webpackChunkName: "home-page" */ '../pages/HomePage'));

const Routes = () => {
  return (
    <>
      <Switch>
        <PublicRoute path='/' exact component={LoginPage} />
        <PublicRoute path='/forgot-password' component={ForgotPassword} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/member/create" component={NewMember}/>
        <PrivateRoute path="/edit" component={EditMember} />
        <PrivateRoute path="/audiences" component={AudiencePage} />
        <PrivateRoute path="/admin" component={AdminPage} />
        <PrivateRoute path="/analytics" component={CampaignDetailCard} />
        <PrivateRoute path="/campaign/home" component={CampaignHomePage} />
        <PrivateRoute path="/campaign/detail" component={CampaignDetail} />
        <PrivateRoute path="/campaign/edit" component={CampaignForm} />
        <PrivateRoute path="/campaign/complete" component={CampaignCompletion} />
        <PrivateRoute path="/campaign/report" component={CampaignViewReport} />
        <PrivateRoute component={PageNotFound} />
      </Switch>
    </>
  );
};
export default Routes;
