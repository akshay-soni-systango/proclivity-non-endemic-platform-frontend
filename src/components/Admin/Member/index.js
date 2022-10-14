import React, { useState } from "react";
import "./style.scss";
import { CSVLink } from 'react-csv';
import { Badge, Card } from "react-bootstrap";
import Dropdown from "../../Common/Dropdown";
import Heading from "../../Common/Heading";
import { Export } from "../../../assets/Icons"
import { useSelector } from "react-redux";
import Button from "../../Common/Button";
import NewMember from "./NewMember";
import { getMemberListState, getSearchState, getToggleCreateMember } from "../../../Features/Admin/adminSlice";
import Search from "../../Common/Search";
import { globalSearch } from '../../../util/searchUtils';
import { COLUMNS } from './MemberTable/column';
import Table from "../../Common/Table/adminTable";
import Loader from '../../Common/Loader';

const MemberPage = () => {

  const searchState = useSelector(getSearchState);
  const memberListState = useSelector(getMemberListState);
  const activeMembers = memberListState.totalActive;
  const membersList = memberListState.members;
  const gotoMemberPage = useSelector(getToggleCreateMember);

  const [filterMembers, setFilterMembers] = useState([...membersList]);
  const [searchedValue, setSearchedValue] = useState("");
  const [memberStatus, setMemberStatus] = useState("All");
  // const [filteredStateOfMemberStatus, setFilteredStateOfMemberStatus] = useState([])
  // console.log(memberStatus, "STATE OF SORTING ACTIVE AND INACTIVE");

  const filterMemberStatus = (event,passedSearchedValue) => {
    setMemberStatus(event.value);
    let filterListArray=[];
    console.log('searchedValue---',searchedValue,event.value);
    if(event.value==="All"){
      filterListArray=[...membersList]
    }else{
      if(searchedValue==="" || passedSearchedValue===""){
        filterListArray = membersList.filter((value) => value.memberStatus === event.value)
      }
      else{

        filterListArray = filterMembers.filter((value) => value.memberStatus === event.value)
      }
    }
    // setFilteredStateOfMemberStatus(filterMemberStatus)
    setFilterMembers(filterListArray)

  };

  // const memberArray = [...membersList];
  // const filterData = memberArray.filter((val) => {
  //   if (statusFilter === "All") {
  //     return val;
  //   } else if (val.memberStatus === statusFilter) {
  //     return val;
  //   }
  // });


  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Role', key: 'role' },
    { label: 'Last Active', key: 'lastActive' },
    { label: 'Create Date', key: 'createDate' },
    { label: 'Member Status', key: 'memberStatus' }
  ]

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  var currentDate = `${dd}/${mm}/${yyyy}`;
  const csvFileName = `member-list-${currentDate}.csv`;


  // const handleChange = (e) => {
  //   const targetValue = e.target.value

  //   if (targetValue !== "") {
  //     dispatch(toggleSearch(true));
  //     const filter = membersList.filter((value) => value.name.toLowerCase().includes(targetValue.toLowerCase()))
  //     dispatch(searchMember(filter))
  //   }
  //   else {
  //     dispatch(toggleSearch(false));
  //     dispatch(searchMember([]))
  //   }
  // }

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

  const searchOnChange = (e) => {
    const { value } = e.target;
    setSearchedValue(value);
    if ((value === "" && memberStatus === "All") || (value === "")) {
      if(memberStatus === "All"){
        setFilterMembers([...membersList])
      }else{
        filterMemberStatus({ value: memberStatus },value);
      }
    }else if(value!=="" && memberStatus === "All"){
      const result = globalSearch(value, ['name', 'memberStatus', 'role'], membersList);
      setFilterMembers(result)
    }
    else {
      const stateToFilter = filterMembers.length > 0 ? filterMembers : membersList;
      const result = globalSearch(value, ['name', 'memberStatus', 'role'], stateToFilter);
      setFilterMembers(result)
    }
  }

  const fetchMoreData = () => {
    setTimeout(() => {
      const concatList=filterMembers.concat([...membersList]);
      setFilterMembers(concatList)
    }, 1000);
  };
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
                {activeMembers} active
              </Badge>
            </div>
            <div className="search-filter-sort align-items-start">
              <Search handleChange={searchOnChange} value={searchedValue} placeholder="Search by Name , Role and Status " />
              <Dropdown className="me-2" preValue="Show: " options={showOptions} defaultValue={{ label: "All", value: "All" }} onChange={filterMemberStatus} />
              <div className="ms-auto" >
                <CSVLink data={filterMembers} headers={headers} filename={csvFileName}>
                  <Button text="Export member list" Icon={Export} variant="secondary" />
                </CSVLink>
              </div>
            </div>
          </div>
          <div className="admin-table">
              <Table tableColumn={COLUMNS} tableData={filterMembers} fetchMoreData={fetchMoreData}/>
          </div>
        </Card.Body>
      </Card>
      }
    </div>
  );
};

export default MemberPage;
