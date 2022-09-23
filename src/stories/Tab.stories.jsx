import React from "react";
import Tab from "../components/Common/Tab";


export default {
  title: "Component/Tab",
  component: Tab,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const tabs = [
  {
      title: 'Campaigns',
      key: 'Campaigns',
      content: <>
      <h3>Campaigns</h3>
      </>
  },
  {
      title: 'Ad Groups',
      key: 'AdGroups',
      content: <>
      <h3>Ad Groups</h3>
      </>
  },
  {
      title: 'Ads',
      key: 'Ads',
      content: <>
      <h3>Ads</h3>
      </>
  }
]

export const TabElement = () => (
    <Tab tabs={tabs} />
);