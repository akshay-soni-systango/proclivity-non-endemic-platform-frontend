import React from "react";
import { Card } from "react-bootstrap";
import { ReactComponent as Menu } from "../../../assets/Icons/menu.svg";
import { ReactComponent as ArrowUp } from "../../../assets/Icons/up-arrow.svg";
import { ReactComponent as Chart } from "../../../assets/Icons/Chart.svg";
import "./style.scss";

const CampaignListView = ({ text, amount, percentage }) => {
  return (
    <Card className="card-wrapper">
      <Card.Body>
        <div className="card-top px-2">
          <p className="card-header-title">{text}</p>
          <div className="ms-auto">
            <Menu />
          </div>
        </div>
        <div className="card-inner px-2">
          <div className="card-description">
            <h3>${amount}</h3>
            <p>
              <span className="green-status me-2">
                <ArrowUp />
                {percentage}
              </span>
              vs last month
            </p>
          </div>
          <div className="card-body-graph ms-auto">
            <Chart />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CampaignListView;
