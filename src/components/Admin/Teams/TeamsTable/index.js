import React from 'react';
import Table from '../../../Common/Table/adminTable';
import { COLUMNS } from './columns';
import teamData from '../../../../util/CampaignData/ADMIN_TEAMS.json'


const TeamsTable = () => {
    const data = [...teamData]
  return (
    <div>
      <Table tableColumn={COLUMNS} tableData={data} />
    </div>
  )
}

export default TeamsTable
