import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Input from "../../../Common/Input";
import { Formik, Form, Field } from "formik";
import "./style.scss";
import searchIcon from "../../../../assets/Icons/search.svg";
import Button from "../../../Common/Button";
import questionMark from "../../../../assets/Icons/questionMark.svg";
import arrowDown from "../../../../assets/Icons/down-arrow-white.svg";
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
        <Col>
          <Card className="campaign-details p-20">
            <div className="campaign-details-heading">
              <h4 className="campaign-name">Campaign Name</h4>
              <p className="tracking-code">Tracking Code 567890</p>
              <div className="campaign-details-status">
              <div className="items-wrapper align-items-center">
                <div className="heading-wrapper">
                  <h3 className="heading">Status</h3>
                  <img src={questionMark} alt="Loading" />
                </div>
                <Button text="Active" className="status-btn"  icon={arrowDown} />
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
    </>
  );
};

export default CampaignForm;
