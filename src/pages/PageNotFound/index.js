import React from 'react';
import { Link } from 'react-router-dom'
import Heading from '../../components/Common/Heading';
import UnderConstruction from "../../assets/images/under-construction.png"

const PageNotFound = () => {
    return (
        <div className='page-under-construction d-flex justify-content-center align-items-center' style={{ textAlign: "center", height:"100vh" }}>
            <div className='under-construction-text'>
                <img src={UnderConstruction} alt="Under-Construction" style={{ width: "100%" }} />
                <Heading level={2} className="mt-4">Page Under Construction</Heading>
                <Heading className="mt-2 mb-3" level={5}>We are doing important maintenance work on this page and will be back shortly.</Heading>
                <Link to='/admin'>Go to home page</Link>
            </div>
        </div>
    )
}

export default PageNotFound