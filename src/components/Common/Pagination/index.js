import React from 'react';
import './style.scss'

const Pagination = ({ dataPerPage, totalData, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className='pagination pagination-lg'>
                {
                    pageNumbers.map(numbers => (
                        <li key={numbers} style={{ cursor: "pointer" }} className='page-item'>
                            <a className='pages-links' onClick={() => paginate(numbers)}>
                                {numbers}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
export default Pagination
