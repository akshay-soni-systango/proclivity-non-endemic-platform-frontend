import React from 'react';
import { useState } from "react";
import CampaignListView from "../../../Cards/campaignListview";
import DatePicker from "react-datepicker";
import calendar from "../../../../assets/Icons/calendar.svg";
import Dropdown from "../../../Common/Dropdown";
import Tab from "../../../Common/Tab";

const CampaignTabs = () => {

    const [startDate, setStartDate] = useState(new Date());
    const tabs = [
        {
            title: 'Campaigns',
            key: 'Campaigns',
            content: <>
                <div className="row">
                    <div className="col-md-8">
                        <h3>Active Live Campaign Metrics</h3>
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-end">
                        <Dropdown className="me-2" />
                        <div className="date-picker-wrapper">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                            <img src={calendar} alt="calendar" className="calendar-img" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <CampaignListView
                            text="Budget"
                            amount="600,000.00"
                            percentage="100%"
                        />
                    </div>
                    <div className="col-md-4">
                        <CampaignListView
                            text="Total Spend"
                            amount="600,000.00"
                            percentage="100%"
                        />
                    </div>
                    <div className="col-md-4">
                        <CampaignListView
                            text="Projected Spend"
                            amount="600,000.00"
                            percentage="100%"
                        />
                    </div>
                </div>
            </>
        },
        {
            title: 'Ad Groups',
            key: 'AdGroups',
            content: 'Ad Groups'
        },
        {
            title: 'Ads',
            key: 'Ads',
            content: 'Ads'
        }
    ]
    return (
        <>
            <Tab tabs={tabs} />
        </>
    )
}

export default CampaignTabs


