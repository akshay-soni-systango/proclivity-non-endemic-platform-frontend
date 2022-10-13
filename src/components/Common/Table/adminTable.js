import React, { useEffect } from "react";
import "./table.scss";
import { useDispatch, useSelector } from 'react-redux';
import { useTable, useSortBy, usePagination } from "react-table";
import arrowUp from "../../../assets/Icons/arrow-up.svg";
import arrowDown from "../../../assets/Icons/arrow-down.svg";
import adminData from '../../../util/CampaignData/ADMIN_MEMBER.json'
import { checkSearch, fetchAsyncMember, getMemberList, getMemberListState, getSearchState } from "../../../Features/Admin/adminSlice";

const Table = ({ tableColumn }) => {
  const dispatch = useDispatch();

  const memberListState = useSelector(getMemberListState);
  const memberArray = memberListState.members
  // console.log(memberArray, "memberListState in TABLE");

  const searchState = useSelector(getSearchState);
  console.log(searchState, "searchState in TABLE");

  const isSearch = useSelector(checkSearch);
  console.log(isSearch, "isSearch in TABLE");


  // const tableData = memberArray == undefined ? adminData.members : memberArray;

  const tableData = (isSearch === false) ?

    memberArray === undefined ?

      adminData.members : memberArray
    :
    searchState.length !== 0 ?
      searchState
      :
      adminData.members


  const tableInstance = useTable(
    {
      columns: tableColumn,
      data: tableData,
    },
    useSortBy,
    usePagination
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = tableInstance;

  useEffect(() => {
    dispatch(getMemberList())
  }, [dispatch])

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
          // tableRows.length === 0 ?
          //   <h1 style={{ textAlign: "center", marginLeft: "40px" }}>Loading...</h1>
          //   :
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <>
                  <tr key={index} className='TABLE_ROW' {...row.getRowProps()}
                  >
                    {row.cells.map((cell, index) => {
                      const name = cell.row.values.name;
                      const nameInitials = name?.split(" ").map((name) => name[0]).join(".");
                      return (
                        <td key={index} {...cell.getCellProps()} >
                          {
                            index === 0 ? nameInitials : cell.render("Cell")
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
