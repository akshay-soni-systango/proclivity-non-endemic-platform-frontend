import React from 'react';
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>404 PageNotFound</h1>
            <Link to='/home'>Go to home page</Link>
        </div>
    )
}

export default PageNotFound