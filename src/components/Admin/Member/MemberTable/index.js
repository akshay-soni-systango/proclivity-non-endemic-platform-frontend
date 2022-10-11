import React from 'react';
import { COLUMNS } from './columns';
import adminData from '../../../../util/CampaignData/ADMIN_MEMBER.json'
import Table from '../../../Common/Table/adminTable';

const MemberTable = () => {
  const data = [...adminData.members];
  return (
    <>
      <Table tableColumn={COLUMNS} tableData={data} />
    </>
  )
}

export default MemberTable
