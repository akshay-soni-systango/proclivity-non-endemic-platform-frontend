import React from 'react';
import {COLUMNS} from './columns';
import adminData from '../../../util/CampaignData/ADMIN_MEMBER.json'
import Table from '../../Common/Table/adminTable';

const AdminTable = ({statusFilter}) => {  

  const memberArray = adminData.members;
  const filterData = memberArray.filter((val) => {
    if (statusFilter === "All") {
      return val;
    } else if (val.memberStatus === statusFilter) {
      console.log("valll", val, statusFilter);
      return val;
    }
  });
    return (   
       <>
        <Table tableColumn={COLUMNS} tableData={filterData} />
    </>
  )
}

export default AdminTable
