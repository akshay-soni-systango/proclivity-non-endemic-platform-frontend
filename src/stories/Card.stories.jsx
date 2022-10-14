import React from "react";
import { Card } from "react-bootstrap";
import CampaignDetailCard from "../components/Cards/campaignDetail";
import CampaignListView from "../components/Cards/campaignListview";

export default {
  title: "Component/Card",
  component: Card,
};

// const Template = (args) => <Button {...args} />;

export const HeaderCard = () => (
  <>
    <CampaignListView text="Budget" amount="600,000.00" percentage="100%" />
  </>
);
// export const DetailCard = () => (
//   <>
//     <CampaignDetailCard />
//   </>
// );
