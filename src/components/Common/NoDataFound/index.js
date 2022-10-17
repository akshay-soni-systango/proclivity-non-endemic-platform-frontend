import React from 'react';
import Heading from '../../Common/Heading';
import NoData from "../../../assets/images/empty-folder.png"
import "./style.scss"

const NoDataFound = () => {
    return (
        <div className='page-under-construction d-block' style={{ textAlign: "center" }}>
            <img src={NoData} alt="No data" />
            <div className='under-construction-text mt-2'>
                <Heading level={4}>No data found</Heading>
                <Heading className="light-title" level={6}> Please try another filter....!</Heading>
            </div>
        </div>
    )
}

export default NoDataFound