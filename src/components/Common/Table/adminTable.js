import React from "react";
import "./table.scss";
// import {  useSelector } from 'react-redux';
import { useTable, useSortBy, usePagination } from "react-table";
import arrowUp from "../../../assets/Icons/arrow-up.svg";
import arrowDown from "../../../assets/Icons/arrow-down.svg";
// import adminData from '../../../util/CampaignData/ADMIN_MEMBER.json'
// import { checkSearch, getMemberListState, getSearchState } from "../../../Features/Admin/adminSlice";



const Table = ({ tableData, tableColumn }) => {
  const tableInstance = useTable(
    {
      columns: tableColumn,
      data: tableData,
    },
    useSortBy,
    usePagination
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = tableInstance;


  return (
    <div className='table-wrapper'>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <img
                          className="toggle_sort"
                          src={arrowUp}
                          alt={arrowUp}
                        />
                      ) : (
                        <img
                          className="toggle_sort"
                          src={arrowDown}
                          alt={arrowDown}
                        />
                      )
                    ) : null}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {

          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <>
                  <tr key={index} className='TABLE_ROW' {...row.getRowProps()}
                  >
                    {row.cells.map((cell, index) => {
                      return (
                        <td key={index} {...cell.getCellProps()} >
                          {
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })}
                  </tr>
                </>
              );
            })}
          </tbody>}
      </table>
    </div>
  );
};
export default Table;
