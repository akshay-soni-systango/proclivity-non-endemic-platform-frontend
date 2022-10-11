import React from "react";
import "./table.scss";
import arrowDown from "../../../assets/Icons/arrow-down.svg";
import arrowUp from "../../../assets/Icons/arrow-up.svg";
import avatar from "../../../assets/Icons/Avatar.svg";
import { useTable, useSortBy, usePagination } from "react-table";
// import Color from "color";
// import { useNavigate } from "react-router-dom";

var stringToColour = function(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

const Table = ({ tableColumn, tableData, ...rest }) => {
  // const navigate = useNavigate()
  const { isCampaignTable, isAdminTable } = { ...rest };
  const Name = [];
  console.log(Name, "Array of names");


  console.log(tableData, "tableDAta ");

  const tableInstance = useTable(
    {
      columns: tableColumn,
      data: tableData,
    },
    useSortBy,
    usePagination
  );
  const { getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
  } =
    tableInstance;
  console.log("headerGroups => ", headerGroups);
  console.log("page => ", page);

  // const gotoCampaignDetail = () => {
  //   navigate(`/detail`)
  // }
  return (
    <div className='table-wrapper'>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
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
          {page.map((row, ind) => {
            prepareRow(row);
            return (
              <>
                <tr key={ind}  {...row.getRowProps()} >
                  {row.cells.map((cell, index) => {
                    const name = cell?.row.values.Name
                    console.log(name, "name of cell");
                    Name.push(name)
                    // const sliced = Name?.map((slice)=> slice)
                    return (
                      <td key={index} {...cell.getCellProps()}>
                        {
                          isCampaignTable ?
                            (index === 0 ?
                              <div className='d-flex align-items-center'>
                                <span className='img-wrapper'>
                                  <img src={avatar} alt={avatar} />
                                  {console.log(cell.value)}
                                </span>
                                <div className='campaign-name' >
                                  <p className='title'>{cell.render("Cell")}</p>
                                  <p className='sub-title'>hello</p>
                                </div>
                              </div>
                              :
                              cell.render("Cell")
                            )
                            :
                            isAdminTable &&
                            (
                              index === 0 ?
                                <div className="d-flex align-items-center">
                                  <div className="img-round avatar-text me-3" style={{
                                    // backgroundColor:Color(stringToColour(name)).lighten(.1), 
                                    // color:Color(stringToColour(name)).isLight() ? "Black" : "White"
                                  }}>S.A</div>
                                  <div>
                                    <p className="m-0">{name}</p>
                                    <p className="light-para fw-normal m-0">e mail</p>
                                  </div>
                                </div>
                                :
                                cell.render("Cell")
                            )
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
    </div>
  );
};

export default Table;
