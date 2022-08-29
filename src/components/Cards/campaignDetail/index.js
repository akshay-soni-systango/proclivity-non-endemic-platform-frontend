import React from "react";
import { Badge, Card } from "react-bootstrap";
import Avatar from "../../../assets/Icons/Avatar.svg";
import "./style.scss";
import { ReactComponent as Menu } from "../../../assets/Icons/menu.svg";
import { ReactComponent as ArrowUp } from "../../../assets/Icons/up-arrow.svg";
import Tab from "../../Common/Tab";
import CampaignListView from "../campaignListView";
import Button from "../../Common/Button";
import Dropdown from "../../Common/Dropdown";
import Input from "../../Common/Input";

const CampaignDetailCard = () => {
  return (
    <>
    <Card className="card-wrapper">
      <Card.Body>
        <div className="card-top">
          <img className="avatar" src={Avatar} alt="Loading..." />
          <p className="title">Pfizer Pulmonary</p>
          <div className="ms-auto">
            <Menu />
          </div>
        </div>
        <h3 className="product-name">
          Proclivity Pulmonary HCP - USA, Northeast General
        </h3>
        <div className="date-wrapper">
          <p className="sub-title">
            20288 <span> • </span> April 30, 2022
          </p>
          <Badge bg="success">Active</Badge>
        </div>
        <div className="card-colum-wrapper">
          <div className="card-colum">
            <p className="colum-title">Unique HCPs</p>
            <h5 className="colum-amount">32,148</h5>
            <p className="green-status">
              <ArrowUp />
              12%
            </p>
          </div>
          <div className="card-colum">
            <p className="colum-title">Unique HCPs</p>
            <h5 className="colum-amount">32,148</h5>
            <p className="green-status">
              <ArrowUp />
              12%
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
    <CampaignListView amount="600,000.00" text="Budget" percentage="12%" />
    <Button text="Create a Campaign" />
    <Input placeholder="Search" icon={Avatar} />
    <Dropdown variant="secondary" text="Advertiser name " />
    <Tab />
    </>
  );
};

export default CampaignDetailCard;
