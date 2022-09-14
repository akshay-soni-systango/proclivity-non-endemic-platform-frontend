import React from 'react';
import { ReactComponent as ViewReport } from '../../../../assets/Icons/viewReport.svg';
import editButton from '../../../../assets/Icons/editButton.svg';
import share from '../../../../assets/Icons/share.svg';
import optionsGrey from '../../../../assets/Icons/optionsGrey.svg';
import './style.scss'
import Button from '../../../Common/Button';
import Tab from '../../../Common/Tab';
import { tabs } from './tabs'
import ViewReportTable from './ViewReportsTable';


const CampaignViewReport = () => {

    return (
        <div>
            <div className='campaign-view-report-header'>
                <div className='title-wrapper'>
                    <div className='main-logo'>
                        <ViewReport />
                    </div>
                    <div className="main-title-time-zone">
                        <h3 className="main-title">Campaign name weekly performance</h3>
                        <h6 className="main-time-zone">Weekly on Mondays at 5:00 AM EST</h6>
                    </div>
                </div>
                <div>
                    <Button className="me-3" variant="secondary" src={optionsGrey} />
                    <Button className="me-2" variant="secondary" src={share} text="Share" />
                    <Button className="ms-1" src={editButton} text="Edit Report" />
                </div>
            </div>
            <div className='nav-bar'>
                <Tab tabs={tabs} />
            </div>
            <div>
                <ViewReportTable/>
            </div>
        </div>
    )
}

export default CampaignViewReport
