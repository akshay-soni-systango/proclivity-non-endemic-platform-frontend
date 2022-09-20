import React from "react";
import "./style.scss";
// import campaignData from '../../../util/CampaignData/CAMPAIGN_DATA.json';
import { Link } from "react-router-dom";
import Tab from "../../Common/Tab";
import { tabs } from "./tabs";
import { ReactComponent as FeaturedIcon } from "../../../assets/Icons/Featured-icon.svg";
import editButton from "../../../assets/Icons/editButton.svg";
import Button from "../../Common/Button";
import grid from "../../../assets/Icons/grid.svg";
import list from "../../../assets/Icons/list.svg";
import add from "../../../assets/Icons/plus-dark.svg";
import Dropdown from "../../Common/Dropdown";
import CampaignDetailCard from "../../Cards/campaignDetail";

const CampaignDetailPage = () => {
  const d = new Date();
  var date = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[month];
  // const cardList = [...campaignData];
  // const cards = cardList.map(() => <>
  //   <div className="col-md-4">
  //     <CampaignDetailCard />
  //   </div>
  // </>);
  return (
    <>
      <div className="campaign-header">
        <div className="title-wrapper d-flex align-items-center">
          <FeaturedIcon />
          <div className="main-title-date">
            <h3 className="main-title">Pulmonary Campaign Name</h3>
            <h6 className="main-date">{`${monthName}.${date}.${year}`}</h6>
          </div>
        </div>
        <div className="btn-wrapper">
          <Button className="me-2" variant="secondary" text="View Reports" />
          <Button className="ms-1" src={editButton} text="Edit Campaign" />
        </div>
      </div>
      <Tab tabs={tabs} />
      <div className="table-header">
        <div className="table-title-wrapper d-flex align-items-center">
          <p className="table-title mb-0 me-2">Ad Groups</p>
          <div className="table-btn-wrapper ms-auto">
            <Link to="/" className="me-4 link-dark">
              View All
            </Link>
            <Button variant="secondary" src={add} text="Create Ad Group" />
          </div>
        </div>
        <div className="search-wrapper d-flex align-items-center">
          <Dropdown />
          <Dropdown className="ms-2" />
          <div className="switch-wrapper ms-auto d-flex align-items-center">
            <div className="switch-btn-wrapper me-2">
              <Button variant="secondary" className="me-2" src={grid} />
              <Button variant="secondary" src={list} />
            </div>
            <Button variant="secondary" text="Customize" />
          </div>
        </div>
      </div>
      <>
        <CampaignDetailCard/>
      </>
    </>
  );
};

export default CampaignDetailPage;
