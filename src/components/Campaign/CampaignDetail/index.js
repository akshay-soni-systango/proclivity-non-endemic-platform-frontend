import React from 'react';
import Tab from "../../Common/Tab";
import{tabs} from './tabs'
import { ReactComponent as FeaturedIcon } from "../../../assets/Icons/Featured-icon.svg";
import editButton from '../../../assets/Icons/editButton.svg'
import Button from "../../Common/Button";
import './style.scss';

const CampaignDetailPage = () => {
    const d = new Date();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[month];
    return (
        <>
            <div className="campaign-header">
                <div className="title-wrapper d-flex align-items-center">
                    <FeaturedIcon />
                    <div className='main-title-date'>
                        <h3 className="main-title">Pulmonary Campaign Name</h3>
                        <h6 className='main-date'>{`${monthName}.${date}.${year}`}</h6>
                    </div>
                </div>
                <div className="btn-wrapper">
                    <Button
                        className="me-2"
                        variant="secondary"
                        text="View Reports"
                    />
                    <Button className="ms-1" src={editButton} text="Edit Campaign" />
                </div>
            </div>
            <Tab tabs={tabs} />


        </>
    )
}

export default CampaignDetailPage