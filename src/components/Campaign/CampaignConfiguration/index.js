import React from "react";
import searchIcon from "../../../assets/Icons/search.svg";
import { Card, Col, Row } from "react-bootstrap";
import Input from "../../Common/Input";
import "./style.scss";
import { Field, Formik, Form } from "formik";
import UploadInput from "../../Common/Upload";
import Dropdown from "../../Common/Dropdown";
import { Link } from "react-router-dom";
import Switch from "../../Common/Switch";

const CampaignConfiguration = () => {
  const MyInput = ({ field, form, ...props }) => {
    return <Input {...field} {...props} />;
  };
  return (
    <div>
      <Row>
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
                      <Link to="/" className="form-link">Build a custom audience condition</Link>
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
                      <Link to="/" className="form-link">Build a custom geography condition</Link>
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
                      <Link to="/" className="form-link">Build a custom schedule condition</Link>
                    </div>

                  </div>
                </div>
              </Card>
            </Form>
          </Formik>
        </Col>
        <Col>
          <Card>
            <div className="p-20">asdfghjkl</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CampaignConfiguration;
