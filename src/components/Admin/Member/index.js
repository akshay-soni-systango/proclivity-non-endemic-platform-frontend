import React, { useState } from "react";
import "./style.scss";
import { CSVLink } from 'react-csv';
import { Badge, Card } from "react-bootstrap";
import Dropdown from "../../Common/Dropdown";
import Heading from "../../Common/Heading";
import { Export } from "../../../assets/Icons";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../Common/Button";
import { getMemberListState, getStatusModalState, getToggleStatusModal, openStatusModal, setStatusModalState } from "../../../Features/Admin/adminSlice";
import Search from "../../Common/Search";
import { globalSearch } from '../../../util/searchUtils';
import { COLUMNS } from './MemberTable/column';
import Table from "../../Common/Table/adminTable";
import Modal from "../../Common/Modal";

const MemberPage = () => {

  const dispatch = useDispatch();

  // all members states.......
  const memberListState = useSelector(getMemberListState);
  const membersList = memberListState.members;
  const activeMembers = membersList.filter((value) => value.memberStatus === 'Active');
  const [filterMembers, setFilterMembers] = useState([...membersList]);

  console.log(memberListState, "filterMembers");




  const [searchedValue, setSearchedValue] = useState("");
  const [memberStatus, setMemberStatus] = useState("All");

  //handling toggle modal 
  const show = useSelector(getToggleStatusModal);
  const memberData = useSelector(getStatusModalState);
  const memberId = memberData?.id
  const memberName = memberData?.memberDetails?.name;
  const statusOfMember = memberData?.memberDetails?.memberStatus;
  // console.log(memberData, "MEMBERDATA PUSHED");

  const handleClose = () => {
    dispatch(openStatusModal(false))
    dispatch(setStatusModalState(""))
  }

  const submitStatus = (e) => {

    const editMemberData = {
      createDate: memberData?.memberDetails?.createDate,
      email: memberData?.memberDetails?.email,
      id: memberData?.memberDetails?.id,
      lastActive: memberData?.memberDetails?.lastActive,
      memberStatus: statusOfMember === "Inactive" ? "Active" : "Inactive",
      name: memberData?.memberDetails?.name,
      role: memberData?.memberDetails?.role
    }
    console.log(editMemberData, "editMemberData");

    const setMemberStatus = filterMembers.map((val) => {
      let clonevalue = { ...val }
      // console.log(clonevalue, "clonevalue only");
      if (clonevalue.id === memberId) {
        return clonevalue = editMemberData
      }
      return clonevalue
    })
    console.log(setMemberStatus, "setMemberStatus");

    setFilterMembers(setMemberStatus)
    handleClose()
  }

  // filter members list according to status dropdown
  const filterMemberStatus = (event) => {
    setMemberStatus(event.value);
    let filterListArray = [];
    if (event.value === "All" && searchedValue === "") {
      filterListArray = [...membersList]
    }
    else {
      if (searchedValue === "") {
        filterListArray = membersList.filter((value) => value.memberStatus === event.value)
      }
      else {
        const result = globalSearch(searchedValue, ['name', 'memberStatus', 'role'], membersList);
        if (event.value === "All") {
          filterListArray = result;
        } else {
          filterListArray = result.filter((value) => value.memberStatus === event.value)
        }
      }
    }
    setFilterMembers(filterListArray)

  };
  const handleFilterChange = (status) => {
    let filterListArray = membersList.filter((value) => value.memberStatus === status)
    setFilterMembers(filterListArray)
  }

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

  // Search from members table....

  const searchOnChange = (e) => {
    const { value } = e.target;
    if ((value === "" && memberStatus === "All") || (value === "")) {
      if (memberStatus === "All") {
        setFilterMembers([...membersList])
      } else {
        handleFilterChange(memberStatus, value);
      }
    } else if (value !== "" && memberStatus === "All") {
      const result = globalSearch(value, ['name', 'memberStatus', 'role'], membersList);
      setFilterMembers(result)
    }
    else {
      const stateToFilter = filterMembers.length > 0 ? filterMembers : membersList;
      const result = globalSearch(value, ['name', 'memberStatus', 'role'], stateToFilter);
      setFilterMembers(result)
    }
    setSearchedValue(value);
  }

  const fetchMoreData = () => {
    setTimeout(() => {
      const concatList = filterMembers.concat([...membersList]);
      setFilterMembers(concatList)
    }, 500);
  };
  return (
    <div>
      <Card className="mb-0 card-bottom-none">
        <Card.Body>
          <div className="table-header">
            <div className="card-title">
              <Heading level={3} className="mb-0 me-2">
                All Members
              </Heading>

              <Badge bg="light" className="me-2">
                {activeMembers.length} active
              </Badge>
            </div>
            <div className="search-filter-sort align-items-start">
              <Search handleChange={searchOnChange} value={searchedValue} placeholder="Search by Name , Role and Status " />
              <Dropdown className="me-2" preValue="Show: " options={showOptions} defaultValue={{ label: "All", value: "All" }} onChange={(event) => filterMemberStatus(event, "")} />
              <div className="ms-auto" >
                <CSVLink data={filterMembers} headers={headers} filename={csvFileName}>
                  <Button text="Export member list" Icon={Export} variant="secondary" />
                </CSVLink>
              </div>
            </div>
          </div>
          <div className="admin-table">
            <Table tableColumn={COLUMNS} tableData={filterMembers} fetchMoreData={fetchMoreData} />
          </div>
          <div>
            <Modal show={show}
              onHide={handleClose}
              modalHeading={<Export />}
              primaryBtnText="Cancel"
              secondaryBtnText={statusOfMember === "Inactive" ? "Activate" : "Deactivate"}
              onPrimaryBtnClick={handleClose}
              onSecondaryBtnClick={submitStatus}
            >
              <Heading level={4}>
                Confirm that {memberName} be {statusOfMember === "Inactive" ? "Activated" : "Deactivated"}
              </Heading>
              <p className="light-para fw-normal">A deactivated user will no longer have access to the platform</p>
            </Modal>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MemberPage;
