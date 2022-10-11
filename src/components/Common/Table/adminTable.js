import React, { useEffect, useState } from "react";
import "./table.scss";
import { useTable, useSortBy, usePagination } from "react-table";
import arrowUp from "../../../assets/Icons/arrow-up.svg";
import arrowDown from "../../../assets/Icons/arrow-down.svg";

const Table = ({ tableData, tableColumn }) => {
  // console.log(tableData , "Data in table");
  const tableInstance = useTable(
    {
      columns: tableColumn,
      data: tableData,
    },
    useSortBy,
    usePagination
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = tableInstance;
  console.log(rows, " rows mapped ");

  const [tableRows, setTableRows] = useState([])
  console.log(tableRows.length, "state length");

  useEffect(() => {
    setTableRows([...rows])
  }, [rows])

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
          tableRows.length === 0 ?
            <h1 style={{ textAlign: "center", marginLeft: "40px" }}>Loading...</h1>
            :
            <tbody {...getTableBodyProps()}>
              {tableRows.map((row, index) => {
                prepareRow(row);
                return (
                  <>
                    <tr key={index} className='TABLE_ROW' {...row.getRowProps()}
                    >
                      {row.cells.map((cell, index) => {
                        const name = cell.row.values.name;
                        const nameInitials = name.split(" ").map((name) => name[0]).join(".");
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
