import React, {useState} from "react";
import { Badge, Card } from "react-bootstrap";
import Input from "../../Common/Input";
import Dropdown from "../../Common/Dropdown";
import Heading from "../../Common/Heading";
import {Export, Search} from "../../../assets/Icons"
import "./style.scss";
import { useSelector } from "react-redux";
import Button from "../../Common/Button";
import NewMember from "./NewMember";
import { getToggleCreateMember } from "../../../Features/Admin/adminSlice";
import AdminTable from "../AdminTable";

const MemberPage = (props) => {
  const gotoMemberPage = useSelector(getToggleCreateMember);

  const [statusFilter, setStatusFilter] = useState("All");
  const onFilterValueChanged = event => {
    console.log("setStatus", event);
    setStatusFilter(event.value);
  };
  
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
      label: 'Inactive',
      value: 'Inactive',
    },
  ]
  return (
    <div>
      {gotoMemberPage ? <NewMember /> : <Card className="mb-0">
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
                className="mb-2 mb-md-0 me-2"
              />
              <Dropdown className="mb-2 mb-md-0 me-2" preValue="Show: " options={showOptions} defaultValue={{label: "All", value: "All"}} onChange={(e) => onFilterValueChanged(e)}  />
              {/* <Dropdown className="mb-2 mb-md-0 me-2" preValue="Sort: "  defaultValue={{label: "Most Recent", value: "Most Recent"}} /> */}
              <div className="ms-0 ms-xl-auto mt-2 mt-xl-0">
                <Button text="Export member list" Icon={Export} variant="secondary"  />
              </div>
            </div>
          </div>
          <div className="admin-table">
            <AdminTable statusFilter={statusFilter} />
          </div>
        </Card.Body>
      </Card>
      }
    </div>
  );
};

export default MemberPage;
