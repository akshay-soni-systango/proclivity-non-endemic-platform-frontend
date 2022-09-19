import React from "react";
import AdminHeader from "../components/Common/AdminHeader";
import downloadIcon from '../assets/Icons/download-cloud.svg';
import addIcon from '../assets/Icons/plus.svg';


export default {
  title: "Example/AdminHeader",
  component: AdminHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const buttons = [
    {
      variant: 'secondary',
      icon: downloadIcon,
      text: 'Export'
    },
    {
      variant: 'primary',
      icon: addIcon,
      text: 'Create a campaigns'
    }
  ]

export const Header = () => (
  <>
   <AdminHeader  buttons={buttons} title="Campaigns" mainIcon={downloadIcon} subTitle="Weekly on Mondays at 5:00 AM EST" />
  </>
);