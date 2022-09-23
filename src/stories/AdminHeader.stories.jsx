import React from "react";
import AdminHeader from "../components/Common/AdminHeader";
import {ReactComponent as DownloadIcon} from '../assets/Icons/download-cloud.svg';
import {ReactComponent as AddIcon} from '../assets/Icons/plus.svg';


export default {
  title: "Component/AdminHeader",
  component: AdminHeader,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
};

const buttons = [
    {
      variant: 'secondary',
      Icon: DownloadIcon,
      text: 'Export',
      iconProps: {color: 'white'},
    },
    {
      variant: 'primary',
      Icon: AddIcon,
      text: 'Create a campaigns'
    }
  ]

export const Header = ({...props}) => (
   <AdminHeader {...props} />
);
Header.args = {

  buttons,
  title: "Campaigns",
  MainIcon: DownloadIcon,
  subTitle: "Weekly on Mondays at 5:00 AM EST",

}