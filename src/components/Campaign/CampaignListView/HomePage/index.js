import { React, useState } from "react";
import "./style.scss";
import { ReactComponent as FeaturedIcon } from "../../../../assets/Icons/Featured-icon.svg";
import Button from "../../../Common/Button";
import downloadIcon from "../../../../assets/Icons/download-cloud.svg";
import addIcon from "../../../../assets/Icons/plus.svg";
import searchIcon from "../../../../assets/Icons/search.svg";
import calendar from "../../../../assets/Icons/calendar.svg";
import grid from "../../../../assets/Icons/grid.svg";
import list from "../../../../assets/Icons/list.svg";
import CampaignTable from "../../CampaignTable";
import Tab from "../../../Common/Tab";
import { Badge } from "react-bootstrap";
import Input from "../../../Common/Input";
import Dropdown from "../../../Common/Dropdown";
import CampaignListView from "../../../Cards/campaignListview";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HomePage = () => {
  const [startDate, setStartDate] = useState(new Date());

  const tabs = [
    {
      title: 'Campaigns',
      key: 'Campaigns',
      content: <>
        <div className="row">
          <div className="col-md-8">
            <h3>Active Live Campaign Metrics</h3>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-end">
            <Dropdown className="me-2" />

            <div className="date-picker-wrapper">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <img src={calendar} alt="calendar" className="calendar-img" />
            </div>
          </div>
          <div className="col-md-4">
            <CampaignListView
              text="Budget"
              amount="600,000.00"
              percentage="100%"
            />
          </div>
          <div className="col-md-4">
            <CampaignListView
              text="Total Spend"
              amount="600,000.00"
              percentage="100%"
            />
          </div>
          <div className="col-md-4">
            <CampaignListView
              text="Projected Spend"
              amount="600,000.00"
              percentage="100%"
            />
          </div>
        </div>
      </>
    },
    {
      title: 'Ad Groups',
      key: 'AdGroups',
      content: 'Ad Groups'
    },
    {
      title: 'Ads',
      key: 'Ads',
      content: 'Ads'
    },
  ]
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
      {/* <Tabs>
        <Tab eventKey="Campaigns" title="Campaigns">
          <div className="row">
            <div className="col-md-8">
              <h3>Active Live Campaign Metrics</h3>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
              <Dropdown className="me-2" />

              <div className="date-picker-wrapper">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                <img src={calendar} alt="calendar" className="calendar-img" />
              </div>
            </div>
            <div className="col-md-4">
              <CampaignListView
                text="Budget"
                amount="600,000.00"
                percentage="100%"
              />
            </div>
            <div className="col-md-4">
              <CampaignListView
                text="Budget"
                amount="600,000.00"
                percentage="100%"
              />
            </div>
            <div className="col-md-4">
              <CampaignListView
                text="Budget"
                amount="600,000.00"
                percentage="100%"
              />
            </div>
          </div>
        </Tab>
        <Tab eventKey="Ad Groups" title="Ad Groups">
          <div>Ad Groups</div>
        </Tab>
        <Tab eventKey="Ads" title="Ads">
          <div>Ads</div>
        </Tab>
      </Tabs> */}
      <Tab tabs={tabs} />
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
