import { React } from "react";
import "./style.scss";
import { ReactComponent as FeaturedIcon } from "../../../../assets/Icons/Featured-icon.svg";
import Button from "../../../Common/Button";
import downloadIcon from "../../../../assets/Icons/download-cloud.svg";
import addIcon from "../../../../assets/Icons/plus.svg";
import searchIcon from "../../../../assets/Icons/search.svg";
import grid from "../../../../assets/Icons/grid.svg";
import list from "../../../../assets/Icons/list.svg";
import CampaignTable from "../../CampaignTable";
// import Tab from "../../../Common/Tab";
import { Badge } from "react-bootstrap";
import Input from "../../../Common/Input";
import Dropdown from "../../../Common/Dropdown";
import "react-datepicker/dist/react-datepicker.css";
import HomePageTab from "./tabs";

const HomePage = () => {

  return (
    <>
      <div className="campaign-header">
        <div className="title-wrapper d-flex align-items-center">
          <FeaturedIcon />
          <h3 className="main-title">Campaigns</h3>
        </div>
        <div className="btn-wrapper">
          <Button
            className="me-2"
            variant="secondary"
            src={downloadIcon}
            text="Export"
          />
          <Button className="ms-1" src={addIcon} text="Create a Campaign" />
        </div>
      </div>
      {/* <Tab tabs={tabs} /> */}
      <HomePageTab/>
      <div className="table-header">
        <div className="table-title-wrapper d-flex align-items-center">
          <p className="table-title mb-0 me-2">All campaigns</p>
          <Badge bg="secondary">10 Active</Badge>
        </div>
        <div className="search-wrapper d-flex align-items-center">
          <Input placeholder="Search" icon={searchIcon} />
          <Dropdown className="ms-2" />
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
      <CampaignTable />
    </>
  );
};
export default HomePage;
