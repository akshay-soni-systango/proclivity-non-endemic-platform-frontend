import { Formik } from "formik";
import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Close, Search } from "../../../../assets/Icons";
import Checkbox from "../../../Common/Checkbox";
import Heading from "../../../Common/Heading";
import Input from "../../../Common/Input";
import Label from "../../../Common/Label";
import Switch from "../../../Common/Switch";
import Tab from "../../../Common/Tab";
import Button from "../../../Common/Button";
import "./style.scss";
import CreationCard from "../../../Common/CreationCard";
import Form from './form'

const NewMember = () => {
  const [switchButton, setSwitchButton] = useState(false);
  const handleClick = () => {
    setSwitchButton(!switchButton);
  };
  const tabs = [
    {
      title: "Permissions",
      key: "Permissions",
      content: <CreationCard />,
    },
    {
      title: "Teams",
      key: "Teams",
      content: <CreationCard />,
    },
    {
      title: "Advertiser Access",
      key: "Advertiser Access",
      content: <CreationCard />,
    },
  ];
  return (
    <div>
      <Heading className="light-title" level={6}>
        New members will recieve a link in email to create a password for
        account access!
      </Heading>
      <Card className="mt-0">
        <Card.Body>
          <div className="newMember-wrapper">
            <div class="row">
              <div className="col-md-12 d-flex justify-content-between align-items-center mb-5">
                <Heading level={3}>New Member</Heading>
                <Switch
                  onClick={handleClick}
                  label={switchButton ? "Active" : "Inactive"}
                />
              </div>
              <div className="col-4">
                <div className="d-flex justify-content-between mb-4 align-items-center">
                  <p className="mb-0">User is Organization Administrator</p>
                  <Switch />
                </div>
                <Form />
              </div>
              <div className="col-8">
                <div className="tab-card">
                  <Tab variant="button" tabs={tabs} />
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
      <div className="text-end">
        <Button variant="secondary" className="me-2" text="Cancel" />
        <Button variant="primary" text="Create Member" />
      </div>
    </div>
  );
};

export default NewMember;
