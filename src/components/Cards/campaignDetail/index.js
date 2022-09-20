import React, { useState } from "react";
import "./style.scss";
import { Badge, Card } from "react-bootstrap";
import Avatar from "../../../assets/Icons/Avatar.svg";
import campaignData from '../../../util/CampaignData/CAMPAIGN_DATA.json'
import { ReactComponent as Menu } from "../../../assets/Icons/menu.svg";
import { ReactComponent as ArrowUp } from "../../../assets/Icons/up-arrow.svg";
import Pagination from "../../Common/Pagination";

const CampaignDetailCard = () => {
  const cardData = [...campaignData];
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(18);
  const indexLast = currentPage * dataPerPage;
  const indexFirst = indexLast - dataPerPage;
  const currentPost = cardData.slice(indexFirst, indexLast);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const cardlist = currentPost.map((value, index) => {
    return <div key={index} className="col-md-4">
      <Card className="card-wrapper">
        <Card.Body>
          <div className="card-top">
            <img className="avatar" src={Avatar} alt="Loading..." />
            <p className="title">Pfizer Pulmonary</p>
            <div className="ms-auto">
              <Menu />
            </div>
          </div>
          <h3 className="product-name">
            {value.Name}
          </h3>
          <div className="date-wrapper">
            <p className="sub-title">
              20288 <span> • </span> April 30, 2022
            </p>
            <Badge bg="success">{value.Status}</Badge>
          </div>
          <div className="card-colum-wrapper">
            <div className="card-colum">
              <p className="colum-title">Unique HCPs</p>
              <h5 className="colum-amount">32,148</h5>
              <p className="green-status">
                <ArrowUp />
                12%
              </p>
            </div>
            <div className="card-colum">
              <p className="colum-title">Unique HCPs</p>
              <h5 className="colum-amount">32,148</h5>
              <p className="green-status">
                <ArrowUp />
                12%
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>

  })
  return (
    <div className="row">
      {cardlist}
      <Pagination dataPerPage={dataPerPage} totalData={cardData.length} paginate={paginate} />
    </div>
  );
};

export default CampaignDetailCard;
