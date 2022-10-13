import React from 'react';
import { COLUMNS } from './columns';
import Table from '../../Common/Table/adminTable';

const AdminTable = () => {
  return (
    <>
      <Table tableColumn={COLUMNS}  />
    </>
  )
}

export default AdminTable
