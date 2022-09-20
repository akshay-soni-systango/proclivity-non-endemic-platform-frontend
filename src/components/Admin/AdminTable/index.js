import React from 'react';
import {COLUMNS} from './columns';
import adminData from '../../../util/CampaignData/ADMIN_MEMBER.json'
import Table from '../../Common/Table/userTable';

const AdminTable = () => {
    return (   
       <>
        <Table tableColumn={COLUMNS} tableData={adminData} isAdminTable={true} />
    </>
  )
}

export default AdminTable
