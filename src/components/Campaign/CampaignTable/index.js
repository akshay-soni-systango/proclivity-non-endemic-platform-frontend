import React, { useState } from 'react'
import Table from '../../Common/Table/userTable';
import { COLUMNS } from './columns';
import campaignData from '../../../util/campaignData/CAMPAIGN_DATA.json';
import Pagination from '../../Common/Pagination';

const CampaignTable = () => {
    const data = [...campaignData];
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);
    const indexLast = currentPage * dataPerPage;
    const indexFirst = indexLast - dataPerPage;
    const currentPost = data.slice(indexFirst, indexLast);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return <>
        <Table tableColumn={COLUMNS} tableData={currentPost} />
        <Pagination dataPerPage={dataPerPage} totalData={data.length} paginate={paginate} />
    </>
}

export default CampaignTable