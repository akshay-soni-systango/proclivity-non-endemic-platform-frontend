import React from "react";
import "./table.scss";
import { useTable, useSortBy, usePagination } from "react-table";
import arrowUp from "../../../assets/Icons/arrow-up.svg";
import arrowDown from "../../../assets/Icons/arrow-down.svg";
import InfiniteScroll from "react-infinite-scroll-component";

const Table = ({ tableData, tableColumn, fetchMoreData }) => {
  const tableInstance = useTable(
    {
      columns: tableColumn,
      data: tableData,
    },
    useSortBy,
    usePagination
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="table-wrapper" id="scrollableDiv">
      <InfiniteScroll
        dataLength={rows.length}
        next={fetchMoreData}
        hasMore={rows.length > 6 ? true : false}
        scrollableTarget="scrollableDiv"
        loader={<h4 className='mt-2 d-flex justify-content-center align-items-center scroll-header-fix'>Loading...</h4>}
      >
        <table {...getTableProps()} className="tableFixHead">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    key={index}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
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
          <tbody {...getTableBodyProps()}>
            { rows.length === 0 ? 
            <div className="ms-5">            
            <h2>No Data</h2>
            <p>Please try another filter....!</p>
            </div>
            :         
            rows.map((row, index) => {
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
          </tbody>
        </table>
      </InfiniteScroll>
    </div>
  );
};
export default Table;
