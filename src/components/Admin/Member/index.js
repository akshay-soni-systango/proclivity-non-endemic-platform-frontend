import React from "react";
import "./style.scss";
import { CSVLink } from 'react-csv';
import { Badge, Card } from "react-bootstrap";
import Input from "../../Common/Input";
import Dropdown from "../../Common/Dropdown";
import Heading from "../../Common/Heading";
import { Export, Search } from "../../../assets/Icons"
import { useSelector, useDispatch } from "react-redux";
import Button from "../../Common/Button";
import NewMember from "./NewMember";
import { checkSearch, getMemberListState, getSearchState, getToggleCreateMember, searchMember, toggleSearch } from "../../../Features/Admin/adminSlice";
import AdminTable from "../AdminTable";

const MemberPage = () => {

  const dispatch = useDispatch();
  const searchState = useSelector(getSearchState);
  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Role', key: 'role' },
    { label: 'Last Active', key: 'lastActive' },
    { label: 'Create Date', key: 'createDate' },
    { label: 'Member Status', key: 'memberStatus' }
  ]
  
  const isSearch = useSelector(checkSearch);
  const gotoMemberPage = useSelector(getToggleCreateMember);
  const memberListState = useSelector(getMemberListState);
  const membersList = memberListState.members;

  const handleChange = (e) => {
    const targetValue = e.target.value
    
    if (targetValue !== "") {
      dispatch(toggleSearch(true));
      const filter = membersList.filter((value) => value.name.toLowerCase().includes(targetValue.toLowerCase()))
      dispatch(searchMember(filter))
    }
    else {
      dispatch(toggleSearch(false));
      dispatch(searchMember([]))
    }
  }

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
                onChange={handleChange}
                Icon={Search}
                error=""
                className="mb-0 me-2"
              />
              <Dropdown className="me-2" preValue="Show: " options={showOptions} />
              <Dropdown preValue="Sort: " />
              <div className="ms-auto" >
                <CSVLink data={isSearch ? searchState : membersList} headers={headers}>
                  <Button text="Export member list" Icon={Export} variant="secondary" />
                </CSVLink>
              </div>
            </div>
          </div>
          <div className="admin-table">
            <AdminTable />
          </div>
        </Card.Body>
      </Card>
      }
    </div>
  );
};

export default MemberPage;
