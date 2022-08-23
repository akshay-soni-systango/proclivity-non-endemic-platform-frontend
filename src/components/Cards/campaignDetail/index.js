import React from 'react';
import { Badge } from 'react-bootstrap';
import Avatar from '../../../assets/Icons/Avatar.svg'
import './style.scss';

const CampaignDetailCard = () => {
    return (
        <div className='card-wrapper'>
            <div className='card-top'>
                <img className='avatar' src={Avatar} alt='Loading...' />
                <p className='title'>Pfizer Pulmonary</p>
                <img src='' alt='' />
            </div>
            <h3 className='product-name'>Proclivity Pulmonary HCP - USA, Northeast General</h3>
            <div className='date-wrapper'>
                <p className='sub-title'>20288 <span> • </span> April 30, 2022</p>
                <Badge bg="success">Active</Badge>
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
    )
}

export default CampaignDetailCard