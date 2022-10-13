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
import * as Yup from "yup";
import BasicForm from "./basicForm";
import { data } from "./data";

const NewMember = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email("Email not correct").required("Required"),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
  });
  const [switchButton, setSwitchButton] = useState(false);
  const handleClick = () => {
    setSwitchButton(!switchButton);
  };
  const tabs = [
    {
      title: "Permissions",
      key: "Permissions",
      content: (
        <CreationCard
          headerTitle="Permissions"
          headerDescription="Description"
          totalSelected="4 Selected"
          checkList={data}
          fieldName="Permissions"
        />
      ),
    },
    {
      title: "Teams",
      key: "Teams",
      content: (
        <CreationCard
          headerTitle="Permissions"
          headerDescription="Description"
          totalSelected="4 Selected"
          checkList={data}
        />
      ),
    },
    {
      title: "Advertiser Access",
      key: "Advertiser Access",
      content: (
        <CreationCard
          headerTitle="Permissions"
          headerDescription="Description"
          totalSelected="4 Selected"
          checkList={data}
        />
      ),
    },
  ];
  return (
    <Formik
      initialValues={{ email: "", firstName: "", lastName: "" }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
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
                    <BasicForm
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
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
            <Button variant="primary" type="submit" text="Create Member" />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default NewMember;
