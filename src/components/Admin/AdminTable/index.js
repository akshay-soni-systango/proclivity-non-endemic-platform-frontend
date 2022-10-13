import React from 'react';
import {COLUMNS} from './columns';
import adminData from '../../../util/CampaignData/ADMIN_MEMBER.json'
import Table from '../../Common/Table/adminTable';

const AdminTable = ({status}) => {  

  const memberArray = adminData.members;
  const filterData = memberArray.filter((val) => {
    if (status === "All") {
      return val;
    } else if (val.memberStatus === status) {
      console.log("valll", val, status);
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
