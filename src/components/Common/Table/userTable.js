import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import './table.scss';
import arrowUp from '../../../assets/Icons/arrow-up.svg';
import arrowDown from '../../../assets/Icons/arrow-down.svg';

const Table = ({tableColumn, tableData}) => {
    const columns = useMemo(() => tableColumn, [tableColumn]);
    const data = useMemo(() => tableData, [tableData]);
    const tableInstance = useTable({
        columns,
        data
    }, useSortBy)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance
    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                        <span>
                                            {column.isSorted ?
                                                (column.isSortedDesc ?
                                                    <img className='toggle_sort' src={arrowUp} alt={arrowUp} />
                                                    : <img className='toggle_sort' src={arrowDown} alt={arrowDown} />)
                                                :
                                                null
                                            }
                                        </span>
                                    </th>
                                ))}
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (<>                         
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    })
                                }
                            </tr>
                        </>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table