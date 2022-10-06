import React from 'react';
import { COLUMNS } from './columns';
import adminData from '../../../../util/CampaignData/ADMIN_MEMBER.json'
import Table from '../../../Common/Table/userTable';

const MemberTable = () => {
  const data = [...adminData];
  return (
    <>
      <Table tableColumn={COLUMNS} tableData={data} isAdminTable={true} />
    </>
  )
}

export default MemberTable
