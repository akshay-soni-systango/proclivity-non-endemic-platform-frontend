import React from 'react';
import {COLUMNS} from './columns';
import adminData from '../../../util/CampaignData/ADMIN_MEMBER.json'
import Table from '../../Common/Table/adminTable';

const AdminTable = () => {

  const memberArray = adminData.members;
  console.log(memberArray, "memberArray");
    return (   
       <>
        <Table tableColumn={COLUMNS} tableData={memberArray} />
    </>
  )
}

export default AdminTable
