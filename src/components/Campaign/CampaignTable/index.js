import React from 'react'
import Table from '../../Common/Table/userTable';
import { COLUMNS } from './columns';
import campaignData from '../../../util/campaignData/CAMPAIGN_DATA.json';

const CampaignTable = () => {
    return <>
        <Table tableColumn={COLUMNS} tableData={campaignData} />
    </>
}

export default CampaignTable