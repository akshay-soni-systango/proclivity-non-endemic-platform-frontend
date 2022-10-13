import React, { useState } from "react";
import { Badge, Card } from "react-bootstrap";
import Dropdown from "../../Common/Dropdown";
import Heading from "../../Common/Heading";
import {Export} from "../../../assets/Icons"
import "./style.scss";
import { useSelector } from "react-redux";
import Button from "../../Common/Button";
import NewMember from "./NewMember";
import { getToggleCreateMember } from "../../../Features/Admin/adminSlice";
import AdminTable from "../AdminTable";
import Search from "../../Common/Search";
import { globalSearch } from '../../../util/searchUtils';
import adminData from '../../../util/CampaignData/ADMIN_MEMBER.json'

const MemberPage = () => {
  const [searchedValue, setSearchedValue]=useState("");
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

  const searchOnChange=(e)=>{
    const { value }=e.target;
    setSearchedValue(value);
    // if(value==="" && filterAppied==="All"){
    if(value===""){
      // set redux state 
    }else{
      const result=globalSearch(value,['name','memberStatus','role'],adminData?.members);
    }
  }
  
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
              <Search handleChange={searchOnChange} value={searchedValue}/>
              <Dropdown className="me-2" preValue="Show: " options={showOptions} />
              <Dropdown preValue="Sort: " />
              <div className="ms-auto" >
                <Button text="Export member list" Icon={Export} variant="secondary"  />
              </div>
            </div>
          </div>
          <div className="admin-table">
            <AdminTable/>
          </div>
        </Card.Body>
      </Card>
      }
    </div>
  );
};

export default MemberPage;
