import React from 'react'

const UserCard = () => {
    return (
        <div className='card-wrapper'>
            <div className='card-top'>
                <img src='' alt='' />
                <p>Pfizer Pulmonary</p>
                <img src='' alt='' />
            </div>
            <h3>Proclivity Pulmonary HCP - USA, Northeast General</h3>
            <p>20288 <span> • </span> April 30, 2022</p>
            <p className='active'>Active</p>
            <div className='card-colum-wrapper'>
                <div className='card-colum'>
                    <p>Unique HCPs</p>
                    <h5>32,148</h5>
                    <p>12%</p>
                </div>
                <div className='card-colum'>
                    <p>Unique HCPs</p>
                    <h5>32,148</h5>
                    <p>12%</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard