import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Input from "../../../Common/Input";
import { Formik, Form, Field } from "formik";
import "./style.scss";
import searchIcon from "../../../../assets/Icons/search.svg";
import Button from "../../../Common/Button";
import questionMark from "../../../../assets/Icons/questionMark.svg";
import UploadInput from "../../../Common/Upload";
import Dropdown from "../../../Common/Dropdown";
import { Link } from "react-router-dom";
import Switch from "../../../Common/Switch";

const CampaignForm = () => {
  return (
    <>
      <Row className="form-wrapper">
        <Col>
          <Card>
            <div className="p-20">
              <Input placeholder="Search" icon={searchIcon} />
            </div>
          </Card>
        </Col>
        <Col xs={6}>
          <Formik>
            <Form className="formik-wrapper">
              <Card>
                <div className="p-20">
                  <div className="form-head">
                    <h3>Ad Group</h3>
                    <div className="form-head-inner d-flex">
                      <p>
                        This blog post has been published. Team members will be
                        able to edit this post and republish changes.
                      </p>
                      <Switch id="adGroup" />
                    </div>
                  </div>
                  <div className="form-wrapper">
                    <label htmlFor="groupName">Ad Group Name</label>
                    <Input id="groupName" type="text" />
                    <label htmlFor="trackingCode">Tracking Code</label>
                    <Input id="trackingCode" type="text" />
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-20">
                  <div className="form-head">
                    <h3>Audience</h3>
                    <div className="form-head-inner">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </div>
                  <div className="form-wrapper">
                    <UploadInput />
                    <label htmlFor="groupName">Ad Group Name</label>
                    <Input id="groupName" type="text" />

                    <label htmlFor="marketer">Device Type</label>
                    <Dropdown className="farmikSelect" />

                    <label htmlFor="marketer">Marketer</label>
                    <Dropdown className="farmikSelect" />

                    <label htmlFor="marketer">Marketer</label>
                    <Dropdown className="farmikSelect" />

                    <div className="link-wrapper w-100 text-end">
                      <Link to="/" className="form-link">
                        Build a custom audience condition
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-20">
                  <div className="form-head">
                    <h3>Budgeting & Flighting</h3>
                    <div className="form-head-inner">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </div>
                  <div className="form-wrapper">
                    <p className="light-heading">Campaign Configurations</p>

                    <label>Budget Type</label>
                    <Input className="farmikSelect" />

                    <label>Budget Cap Type</label>
                    <Input type="text" icon={searchIcon} value="1000" />

                    <hr />

                    <p className="light-heading">CPM Configuration</p>

                    <label>Total CPM</label>
                    <Input type="text" icon={searchIcon} value="1000" />

                    <label>Data CPM</label>
                    <Input type="text" icon={searchIcon} value="1000" />

                    <label>Spend CPM</label>
                    <Input type="text" icon={searchIcon} value="1000" />

                    <hr />

                    <p className="light-heading">Flighting Configuration</p>

                    <label>External Code</label>
                    <Input type="text" icon={searchIcon} value="1000" />

                    <label>Budget</label>
                    <Input type="text" icon={searchIcon} value="1000" />
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-20">
                  <div className="form-head">
                    <h3>Geography</h3>
                    <div className="form-head-inner">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </div>
                  <div className="form-wrapper">
                    <UploadInput />

                    <div className="link-wrapper w-100 text-end">
                      <Link to="/" className="form-link">
                        Build a custom geography condition
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-20">
                  <div className="form-head">
                    <h3>Schedule</h3>
                    <div className="form-head-inner">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </div>
                  <div className="form-wrapper">
                    <UploadInput />

                    <div className="link-wrapper w-100 text-end">
                      <Link to="/" className="form-link">
                        Build a custom schedule condition
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </Form>
          </Formik>
        </Col>
        <Col className="col-md-3 form-campaign-data">
          <div className="campaign-details">
            <h4 className="campaign-details-campaign-name">Campaign Name</h4>
            <p className="campaign-details-tracking-code">
              Tracking Code 567890
            </p>
            <div className="campaign-details-status">
              <p className="status-heading"> Status</p>
              <p className="btn btn-primary">Active</p>
            </div>
          </div>
          <hr />
          <div className="campaign-detail-names">
            <div className="marketer-name">
              <div className="heading-wrapper">
                <h3 className="heading">Marketer</h3>
                <img src={questionMark} alt="Loading" />
              </div>
              <text className="name">Marketer Name</text>
            </div>
            <div className="advertiser-name">
              <div className="heading-wrapper">
                <h3 className="heading"> Advertiser</h3>
                <img src={questionMark} alt="Loading" />
              </div>
              <text className="name">Advertiser Name</text>
            </div>
            <div className="category-name">
              <div className="heading-wrapper">
                <h3 className="heading">Category</h3>
                <img src={questionMark} alt="Loading" />
              </div>
              <text className="name">Category Name</text>
            </div>
            <div className="type-name">
              <div className="heading-wrapper">
                <h3 className="heading">Campaign Type</h3>
                <img src={questionMark} alt="Loading" />
              </div>
              <text className="name">Name Type</text>
            </div>
          </div>
          <hr />
          <div className="campaign-budget">
            <div className="campaign-budget-amount">
              <div className="heading-wrapper">
                <h3 className="heading">Budget</h3>
                <img src={questionMark} alt="Loading" />
              </div>
              <text className="amount">$5,000,000.00</text>
            </div>
            <div className="campaign-budget-remaining">
              <div className="heading-wrapper">
                <h3 className="heading">Remaining</h3>
                <img src={questionMark} alt="Loading" />
              </div>
              <text className="budget-remaining-amount">$2,500,000.00</text>
            </div>
          </div>
          <hr />
          <div className="campaign-spend">
            <div className="campaign-spend-amount">
              <div className="heading-wrapper">
                <h3 className="heading">Spend</h3>
                <img src={questionMark} alt="Loading" />
              </div>
              <text className="amount">$2,500,000.00 (50%)</text>
            </div>
            <div className="campaign-spend-projectedspend">
              <div className="heading-wrapper">
                <h3 className="heading">Projected Spend</h3>
                <img src={questionMark} alt="Loading" />
              </div>
              <text className="projected-spend-amount">$4,999,900.25</text>
            </div>
            <div className="campaign-spend-projectedspend">
              <div className="heading-wrapper">
                <h3 className="heading">Deviation</h3>
                <img src={questionMark} alt="Loading" />
              </div>
              <text className="projected-spend-amount">$100.00</text>
            </div>
          </div>
          <hr />
        </Col>
      </Row>
    </>
  );
};

export default CampaignForm;
