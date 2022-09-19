import React from "react";
import { Row, Col, Card, ProgressBar } from "react-bootstrap";
import Input from "../../../Common/Input";
import { Formik, Form} from "formik";
import "./style.scss";
import searchIcon from "../../../../assets/Icons/search.svg";
import Button from "../../../Common/Button";
import questionMark from "../../../../assets/Icons/questionMark.svg";
import arrowDown from "../../../../assets/Icons/down-arrow-white.svg";
import addFlight from "../../../../assets/Icons/add-file.svg";
import editIcon from "../../../../assets/Icons/editIcon.svg";
import UploadInput from "../../../Common/Upload";
import Dropdown from "../../../Common/Dropdown";
import { Link } from "react-router-dom";
import Switch from "../../../Common/Switch";
import Label from "../../../Common/Label";

const CampaignForm = (state) => {
  return (
    <>
      <Row className="form-wrapper">
        <Col xs={3}>
          <Card>
            <div className="card-spacing">
              <Input placeholder="Search" icon={searchIcon} />
            </div>
          </Card>
        </Col>
        <Col xs={6}>
          <Formik>
            <Form className="formik-wrapper">
              <Card>
                <div className="card-spacing">
                  <div className="form-head">
                    <h3>Ad Group</h3>
                    <div className="form-head-inner d-flex">
                      <p className="sub-title pr-3">
                        This blog post has been published. Team members will be
                        able to edit this post and republish changes.
                      </p>
                      <Switch id="adGroup" />
                    </div>
                  </div>
                  <div className="form-wrapper">
                    <Label htmlFor="groupName" value="Campaign Name" />
                    <Input id="groupName" type="text" />
                    <Label htmlFor="trackingCode" value="Tracking Code"></Label>
                    <Input id="trackingCode" type="text" />
                  </div>
                </div>
              </Card>

              <Card>
                <div className="card-spacing">
                  <div className="form-head">
                    <h3>Audience</h3>
                    <div className="form-head-inner">
                      <p className="sub-title">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </div>
                  <div className="form-wrapper">
                    <UploadInput />
                    <Label htmlFor="groupName" value="Ad Group Name"></Label>
                    <Input id="groupName" type="text" />

                    <Label htmlFor="marketer" value="Device Type"></Label>
                    <Dropdown preValue="static:" className="farmikSelect" />

                    <Label htmlFor="marketer" value="Marketer"></Label>
                    <Dropdown className="farmikSelect" />

                    <Label htmlFor="marketer" value="Marketer"></Label>
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
                <div className="card-spacing">
                  <div className="form-head">
                    <h3>Budgeting & Flighting</h3>
                    <div className="form-head-inner">
                      <p className="sub-title">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </div>
                  <div className="form-wrapper">
                    <p className="light-heading">Campaign Configurations</p>

                    <Label value="Budget Type"></Label>
                    <Input className="farmikSelect" />

                    <Label value="Budget Cap Type"></Label>
                    <Input type="text" icon={searchIcon} value="1000" />

                    <hr />

                    <p className="light-heading">CPM Configuration</p>

                    <Label value="Total CPM"></Label>
                    <Input type="text" icon={searchIcon} value="1000" />

                    <Label value="Data CPM"></Label>
                    <Input type="text" icon={searchIcon} value="1000" />

                    <Label value="Spend CPM"></Label>
                    <Input type="text" icon={searchIcon} value="1000" />

                    <hr />

                    <p className="light-heading">Flighting Configuration</p>

                    <Label value="External Code"></Label>
                    <Input type="text" icon={searchIcon} value="1000" />

                    <Label value="Budget"></Label>
                    <Input type="text" icon={searchIcon} value="1000" />
                  </div>
                </div>
                <div className="grey-card p-3">
                  <div className="align-right">
                    <Button
                      variant="secondary"
                      src={addFlight}
                      text="Add Flight"
                    />
                  </div>
                  <div className="form-head">
                    <h3>Flight 1</h3>
                    <div className="form-head-inner d-flex">
                      <p className="sub-title">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </div>
                  <div className="form-detail">
                    <p className="light-heading">Budget Configuration</p>
                    <p className="sub-title">
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                    <div className="edit-form">
                      <h1>$35,550.00</h1>
                      <img src={editIcon} alt="loading..." />
                    </div>

                    <p className="light-heading">Pacing Configuration</p>
                    <p className="sub-title">
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                    <div className="edit-form">
                      <h1>25%</h1>
                      <img src={editIcon} alt="loading..." />
                    </div>
                    <ProgressBar min="0" now="30" max="100" />
                    <div className="align-right mt-4">
                      <Button
                        variant="secondary"
                        src={addFlight}
                        text="Add Flight"
                      />
                    </div>

                    <div className="link-wrapper w-100 text-end">
                      <Link to="/" className="form-link">
                        Build a custom audience condition
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="grey-card p-3">
                  <div className="align-right">
                    <Button
                      variant="secondary"
                      src={addFlight}
                      text="Add Flight"
                    />
                  </div>
                  <div className="form-head">
                    <h3>Flight 2</h3>
                    <div className="form-head-inner d-flex">
                      <p className="sub-title">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </div>
                  <div className="form-detail">
                    <p className="light-heading">Budget Configuration</p>
                    <p className="sub-title">
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                    <div className="edit-form">
                      <h1>$35,550.00</h1>
                      <img src={editIcon} alt="loading..." />
                    </div>

                    <p className="light-heading">Pacing Configuration</p>
                    <p className="sub-title">
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                    <div className="edit-form">
                      <h1>25%</h1>
                      <img src={editIcon} alt="loading..." />
                    </div>
                    <ProgressBar min="0" now="30" max="100" />
                    <div className="align-right mt-4">
                      <Button
                        variant="secondary"
                        src={addFlight}
                        text="Add Flight"
                      />
                    </div>

                    <div className="link-wrapper w-100 text-end">
                      <Link to="/" className="form-link">
                        Build a custom audience condition
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="card-spacing">
                  <div className="form-head">
                    <h3>Geography</h3>
                    <div className="form-head-inner">
                      <p className="sub-title">
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
                <div className="card-spacing">
                  <div className="form-head">
                    <h3>Schedule</h3>
                    <div className="form-head-inner">
                      <p className="sub-title">
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
        <Col xs={3}>
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
    </>
  );
};

export default CampaignForm;
