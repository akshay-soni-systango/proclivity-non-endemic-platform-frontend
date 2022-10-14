import React from 'react';
import { Link } from 'react-router-dom'
import Heading from '../../components/Common/Heading';
import UnderConstruction from "../../assets/images/under-construction.png"

const PageNotFound = () => {
    return (
        <div className='page-under-construction d-block' style={{ textAlign: "center" }}>
            <img src={UnderConstruction} alt="Under-Construction" />
            <div className='under-construction-text mt-4'>
                <Heading level={2}>Page Under Construction</Heading>
                <Heading className="mt-2 mb-3" level={5}>We are doing important maintenance work on this page and will be back shortly.</Heading>
                
                <Link to='/admin'>Go to home page</Link>
            </div>
        </div>
    )
}

export default PageNotFound