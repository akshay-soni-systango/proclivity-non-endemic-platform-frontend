import React, { useState } from 'react'
import Table from '../../Common/Table/adminTable';
import { COLUMNS } from './columns';
import campaignData from '../../../util/CampaignData/CAMPAIGN_DATA.json';
import Pagination from '../../Common/Pagination';

const CampaignTable = () => {
    const data = [...campaignData];
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(20);
    const indexLast = currentPage * dataPerPage;
    const indexFirst = indexLast - dataPerPage;
    const currentPost = data.slice(indexFirst, indexLast);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return <>
        <Table tableColumn={COLUMNS} tableData={currentPost} isCampaignTable={true} />
        {/* <Pagination dataPerPage={dataPerPage} totalData={data.length} paginate={paginate} /> */}
    </>
}   

export default CampaignTable