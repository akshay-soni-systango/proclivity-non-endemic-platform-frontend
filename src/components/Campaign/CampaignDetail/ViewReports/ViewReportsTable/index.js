import React, { useState } from 'react';
import {COLUMNS} from './columns';
import viewReportData from '../../../../../util/CampaignData/VIEW_REPORTS.json'
import Table from '../../../../Common/Table/userTable';
import Pagination from '../../../../Common/Pagination';

const ViewReportTable = () => {
  const data = [...viewReportData];
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

export default ViewReportTable
