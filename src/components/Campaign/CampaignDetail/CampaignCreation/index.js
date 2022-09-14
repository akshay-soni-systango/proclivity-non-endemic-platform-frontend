import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Switch from "../../../Common/Switch";
import searchIcon from "../../../../assets/Icons/search.svg";
import questionMark from "../../../../assets/Icons/questionMark.svg";
import arrowDown from "../../../../assets/Icons/down-arrow-white.svg";
import menu from "../../../../assets/Icons/menu.svg";
import "./style.scss";
import Input from "../../../Common/Input";
import Button from "../../../Common/Button";
const CampaignCompletion = () => {
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <div className="card-spacing">
              <Input placeholder="Search" icon={searchIcon} />
            </div>
          </Card>
        </Col>

        <Col xs={6}>
          <Card>
            <div className="card-spacing pb-0">
              <div className="campaign-detail-header">
                <h3>Campaign Details</h3>
                <div className="campaign-detail-head-inner">
                  <p className="campaign-detail-header-description">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <Switch id="adGroup" />
                  <span>
                    <img src={menu} alt="Loading" />
                  </span>
                </div>
              </div>
              <hr />
            </div>
            <div className="campaign-detail-main-wrapper">
              <div className="campaign-detail-main px-3">
                <div>
                  <h5>Campaign Name</h5>
                  <p>Pfizer Pulmonary Lead Gen Chicago</p>
                </div>
                <div>
                  <h5>Tracking Code</h5>
                  <p>12344768201</p>
                </div>
                <div>
                  <h5>Marketer</h5>
                  <p>Marketer Name</p>
                </div>
                <div>
                  <h5>Objective</h5>
                  <p>Objective Name</p>
                </div>
                <div>
                  <h5>Category</h5>
                  <p>Category Name</p>
                </div>
                <div>
                  <h5>Campaign Type</h5>
                  <p>Campaign Type</p>
                </div>
                <div className="w-100">
                  <h5>Comments</h5>
                  <p className="w-100">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using language.
                  </p>
                </div>
                <div>
                  <h5>Country</h5>
                  <p>United States</p>
                </div>
                <div>
                  <h5>Timezone</h5>
                  <p>(PST)</p>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="card-spacing pb-0">
              <div className="campaign-detail-header">
                <h3>Brand</h3>
                <div className="campaign-detail-brand-head-inner">
                  <p className="campaign-detail-header-description">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <span>
                    <img src={menu} alt="Loading" />
                  </span>
                </div>
              </div>
              <hr />
            </div>
            <div className="campaign-detail-brand-main-wrapper">
              <div className="campaign-detail-main px-3">
                <div>
                  <h5>Inventory lists</h5>
                  <p>0</p>
                </div>
                <div>
                  <h5>Blocking profiles</h5>
                  <p>0</p>
                </div>
                <div>
                  <h5>Enter URLs</h5>
                  <p>Description name</p>
                </div>
                <div>
                  <h5>Objective</h5>
                  <p>Objective Name</p>
                </div>
                <div>
                  <h5>Uploaded files</h5>
                  <p>3 uploaded files</p>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="card-spacing pb-0">
              <div className="campaign-detail-header">
                <h3>Budget</h3>
                <div className="campaign-detail-brand-head-inner">
                  <p className="campaign-detail-header-description">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.{" "}
                  </p>
                  <span>
                    <img src={menu} alt="Loading" />
                  </span>
                </div>
              </div>
              <hr />
            </div>
            <div className="campaign-detail-brand-main-wrapper">
              <div className="campaign-detail-main px-3">
                <div>
                  <h5>Budget</h5>
                  <p>$250.00</p>
                </div>
                <div>
                  <h5>Dates</h5>
                  <p>10/02/2022 - 12/12/2022</p>
                </div>
                <div>
                  <h5>External Code</h5>
                  <p>190131</p>
                </div>
                <div>
                  <h5>Budget Cap</h5>
                  <p>Objective Name</p>
                </div>
                <div>
                  <h5>Uploaded files</h5>
                  <p>$50,000,000.00</p>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="campaign-details card-spacing">
            <div className="campaign-details-heading">
              <h4 className="campaign-name">Campaign Name</h4>
              <p className="tracking-code">Tracking Code 567890</p>
              <div className="campaign-details-status">
                <div className="items-wrapper align-items-center">
                  <div className="heading-wrapper">
                    <h3 className="heading">Status</h3>
                    <img src={questionMark} alt="Loading" />
                  </div>
                  <Button
                    text="Active"
                    className="status-btn"
                    icon={arrowDown}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="campaign-detail-wrapper">
              <div className="items-wrapper">
                <div className="heading-wrapper">
                  <h3 className="heading">Marketer</h3>
                  <img src={questionMark} alt="Loading" />
                </div>
                <p className="name">Marketer Name</p>
              </div>
              <div className="items-wrapper">
                <div className="heading-wrapper">
                  <h3 className="heading">Advertiser</h3>
                  <img src={questionMark} alt="Loading" />
                </div>
                <p className="name">Advertiser Name</p>
              </div>
              <div className="items-wrapper">
                <div className="heading-wrapper">
                  <h3 className="heading">Category</h3>
                  <img src={questionMark} alt="Loading" />
                </div>
                <p className="name">Category Name</p>
              </div>
              <div className="items-wrapper">
                <div className="heading-wrapper">
                  <h3 className="heading">Campaign Type</h3>
                  <img src={questionMark} alt="Loading" />
                </div>
                <p className="name">Name Type</p>
              </div>
            </div>
            <hr />
            <div className="campaign-detail-wrapper">
              <div className="items-wrapper">
                <div className="heading-wrapper">
                  <h3 className="heading">Budget</h3>
                  <img src={questionMark} alt="Loading" />
                </div>
                <p className="name">$5,000,000.00</p>
              </div>
              <div className="items-wrapper sub-heading">
                <div className="heading-wrapper">
                  <h3 className="heading">Remaining</h3>
                </div>
                <p className="name">$2,500,000.00</p>
              </div>
            </div>
            <hr />
            <div className="campaign-detail-wrapper">
              <div className="items-wrapper">
                <div className="heading-wrapper">
                  <h3 className="heading">Spend</h3>
                  <img src={questionMark} alt="Loading" />
                </div>
                <p className="name">$2,500,000.00 (50%)</p>
              </div>
              <div className="items-wrapper sub-heading">
                <div className="heading-wrapper">
                  <h3 className="heading">Projected Spend</h3>
                </div>
                <p className="name">$4,999,900.25</p>
              </div>
              <div className="items-wrapper sub-heading">
                <div className="heading-wrapper">
                  <h3 className="heading">Deviation</h3>
                </div>
                <p className="name">$100.00</p>
              </div>
            </div>
            <hr />
            <div className="campaign-detail-wrapper">
              <div className="items-wrapper">
                <div className="heading-wrapper">
                  <h3 className="heading">Days Left</h3>
                  <img src={questionMark} alt="Loading" />
                </div>
                <p className="name">$2,500,000.00 (50%)</p>
              </div>
              <div className="items-wrapper sub-heading">
                <div className="heading-wrapper">
                  <h3 className="heading">Start Date</h3>
                </div>
                <p className="name">Jan 1, 2022</p>
              </div>
              <div className="items-wrapper sub-heading">
                <div className="heading-wrapper">
                  <h3 className="heading">End Date</h3>
                </div>
                <p className="name">Oct 27, 2022</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CampaignCompletion;
