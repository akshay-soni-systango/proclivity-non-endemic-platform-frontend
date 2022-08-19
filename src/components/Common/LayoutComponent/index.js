import React from 'react'
// import { Link } from 'react-router-dom';
import SidebarComponent from '../SideBar/SidebarComponent';
import './style.scss'


const Layout = ({ children }) => {


    return (
        <div  className='wrapper'>            
                 <SidebarComponent />
            <div className='main-container'>             
                {/* <main>{children}</main> */}
                <div className='wrapper'>
                    <div className='card-wrapper'>
                        <div className='card-top'>
                            <img className='avatar' src='' alt='' />
                            <p className='title'>Pfizer Pulmonary</p>
                            <img src='' alt='' />
                        </div>
                        <h3 className='product-name'>Proclivity Pulmonary HCP - USA, Northeast General</h3>
                        <div className='date-wrapper'>
                            <p className='sub-title'>20288 <span> • </span> April 30, 2022</p>
                            <p className='active'>Active</p>
                        </div>
                        <div className='card-colum-wrapper'>
                            <div className='card-colum'>
                                <p>Unique HCPs</p>
                                <h5 className='colum-title'>32,148</h5>
                                <p className='green-status'>12%</p>
                            </div>
                            <div className='card-colum'>
                                <p>Unique HCPs</p>
                                <h5 className='colum-title'>32,148</h5>
                                <p className='green-status'>12%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout