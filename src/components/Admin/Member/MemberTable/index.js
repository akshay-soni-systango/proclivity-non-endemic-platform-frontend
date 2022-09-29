import React, { useState } from 'react';
import { COLUMNS } from './columns';
import adminData from '../../../../util/CampaignData/ADMIN_MEMBER.json'
import Table from '../../../Common/Table/userTable';
import Pagination from '../../../Common/Pagination';

const MemberTable = () => {
  const data = [...adminData];
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const indexLast = currentPage * dataPerPage;
  const indexFirst = indexLast - dataPerPage;
  const currentPost = data.slice(indexFirst, indexLast);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <>
      <Table tableColumn={COLUMNS} tableData={currentPost} isAdminTable={true} />
      <Pagination dataPerPage={dataPerPage} totalData={data.length} paginate={paginate} />
    </>
  )
}

export default MemberTable
