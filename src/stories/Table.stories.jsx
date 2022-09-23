// import React, { useState } from "react";
import {COLUMNS} from '../components/Campaign/CampaignTable/columns';
// import viewReportData from '../../../../../util/CampaignData/VIEW_REPORTS.json'
// import Pagination from "../components/Common/Pagination";
import Table from "../components/Common/Table/userTable";


export default {
  title: "Component/Table",
  component: Table,
  argTypes: {
    backgroundColor: { control: "color" },
    tableData: {
      
    }
    
  },
};



export const TableElement = ({tableData}) => (
  <Table tableColumn={COLUMNS} tableData={tableData} />
);

TableElement.args = {
  tableData: [
    {
        "Name" : "Lana Steyer",
        "Brands" : "pfixer",
        "Role" : "Super Admin",
        "Last Active":"1hr ago"
    },
    {
        "Name" : "Lana Steyer",
        "Brands" : "pfixer",
        "Role" : "Super Admin",
        "Last Active":"1hr ago"
    },    
]
}