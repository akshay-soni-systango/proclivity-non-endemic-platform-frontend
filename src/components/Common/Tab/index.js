import React from "react";
import { Tabs } from "react-bootstrap";
import CampaignListView from "../../Cards/campaignListview";
import "./style.scss";

const Tab = () => {
  return (
    <Tabs>
      <Tab eventKey="Campaigns" title="Campaigns">
        <div>Active Live Campaign Metrics</div>
        <div className="row">
          <div className="col-md-4">
            <CampaignListView text="Budget" amount="600,000.00" percentage="100%" />
          </div>
          <div className="col-md-4">
            <CampaignListView text="Budget" amount="600,000.00" percentage="100%" />
          </div>
          <div className="col-md-4">
            <CampaignListView text="Budget" amount="600,000.00" percentage="100%" />
          </div>
        </div>
      </Tab>
      <Tab eventKey="Ad Groups" title="Ad Groups">
        <div>Ad Groups</div>
      </Tab>
      <Tab eventKey="Ads" title="Ads">
        <div>Ads</div>
      </Tab>
    </Tabs>
  );
};

export default Tab;
