import React from "react";
import { Card } from "react-bootstrap";
import { Close, Search } from "../../../assets/Icons";
import Checkbox from "../Checkbox";
import Heading from "../Heading";
import Input from "../Input";
import './style.scss'

const CreationCard = () => {
  return (
    <div className="card-wrapper">
      <div className="row">
        <div className="col-md-8">
          <Input className="mb-0" Icon={Search} />
          <Card className="tab-card">
            <div className="card-header col-part">
              <p className="light-para fw-normal mb-0">Permissions</p>
              <Heading className="light-title" level={6}>
                Description
              </Heading>
            </div>
            <div className="card-body col-part">
              <p className="mb-0">
                <Checkbox id="user" text="User Access Management" />
              </p>
              <Heading className="light-title" level={6}>
                Manage User and Team Permissions
              </Heading>
              <p className="mb-0">
                <Checkbox id="user1" text="User Access Management" />
              </p>
              <Heading className="light-title" level={6}>
                Manage User and Team Permissions
              </Heading>
              <p className="mb-0">
                <Checkbox id="user2" text="User Access Management" />
              </p>
              <Heading className="light-title" level={6}>
                Manage User and Team Permissions
              </Heading>
              <p className="mb-0">
                <Checkbox id="user3" text="User Access Management" />
              </p>
              <Heading className="light-title" level={6}>
                Manage User and Team Permissions
              </Heading>
            </div>
          </Card>
        </div>
        <div className="col-md-4">
          <Heading level={5}>4 Selected</Heading>
          <Card>
            <div className="d-flex justify-content-between align-items-center p-2">
              <Heading level={6} className="mb-0">
                Programmatic Team 1
              </Heading>
              <Close />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreationCard;
