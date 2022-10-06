import React from "react";
import { Badge, Card } from "react-bootstrap";
import Input from "../../Common/Input";
import Dropdown from "../../Common/Dropdown";
import Heading from "../../Common/Heading";
import MemberTable from "./MemberTable";
import {Export, Search} from "../../../assets/Icons"
import "./style.scss";
import { useSelector } from "react-redux";
import Button from "../../Common/Button";
import NewMember from "./NewMember";
import { getToggleCreateMember } from "../../../Features/Admin/adminSlice";

const MemberPage = () => {
  const gotoMemberPage = useSelector(getToggleCreateMember);
  
  const showOptions = [
    {
      label: 'All',
      value: 'All',
    },
    {
      label: 'Active',
      value: 'Active',
    },
    {
      label: 'Deactivated',
      value: 'Deactivated',
    },
  ]
  return (
    <div>
      {gotoMemberPage ? <NewMember /> : <Card>
        <Card.Body>
          <div className="table-header">
            <div className="card-title">
              <Heading level={3} className="mb-0 me-2">
                All Members
              </Heading>

              <Badge bg="light" className="me-2">
                100 active
              </Badge>
            </div>
            <div className="search-filter-sort align-items-start">
              <Input
                Icon={Search}
                error=""
                className="mb-0 me-2"
              />
              <Dropdown className="me-2" preValue="Show: " options={showOptions} />
              <Dropdown preValue="Sort: " />
              <div className="ms-auto" >
                <Button text="Export member list" Icon={Export} variant="secondary"  />
              </div>
            </div>
          </div>
          <div className="admin-table">
            <MemberTable />
          </div>
        </Card.Body>
      </Card>
      }
    </div>
  );
};

export default MemberPage;
