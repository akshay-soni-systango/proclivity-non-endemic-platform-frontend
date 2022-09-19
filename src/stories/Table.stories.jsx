import React, { useState } from "react";
import {COLUMNS} from './columns';
import viewReportData from '../../../../../util/CampaignData/VIEW_REPORTS.json'
import Pagination from "../components/Common/Pagination";
import Table from "../components/Common/Table/userTable";


export default {
  title: "Example/Table",
  component: Table,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};



export const TableElement = () => (
  <>
    {/* <Table tableColumn={COLUMNS} tableData={currentPost} />
    <Pagination dataPerPage={dataPerPage} totalData={data.length} paginate={paginate} /> */}
  </>
);