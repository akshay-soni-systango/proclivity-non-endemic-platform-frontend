import React from 'react';
import options from '../../../assets/Icons/options.svg';
import './style.scss'

const CampaignListview = (text, amount, percentage) => {
    return (
        <div className='card-wrapper'>
            <div className='card-header'>
                <p className='card-header-title'>{text}</p>
                <span className='card-header-icon'>
                    <img src={options} alt={options} />
                </span>
            </div>
            <div className='card-body'>
                <h1>${amount}</h1>
                <p>
                    <img src='' alt='' />
                    <span>{percentage}</span>
                    <span>
                        vs last month
                    </span>
                </p>
                <div className='card-body-graph'>
                    <img src='' alt='' />
                </div>
            </div>
        </div>
    )
}

export default CampaignListview