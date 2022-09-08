import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Switch from '../../../Common/Switch';
import menu from '../../../../assets/Icons/menu.svg'
import './style.scss'
const CampaignCompletion = () => {


    return (
        <div>
            <Row>
                <Col className='col-md-10'>
                    <Card>
                        <div className="p-20 pb-0">
                            <div className="campaign-detail-header">
                                <h3>Campaign Details</h3>
                                <div className="campaign-detail-head-inner">
                                    <p className='campaign-detail-header-description'>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                    <Switch id="adGroup" />
                                    <span><img src={menu} alt='Loading' /></span>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className='campaign-detail-main-wrapper'>
                            <div className='campaign-detail-main px-3'>
                                <div>
                                    <h5>Campaign Name</h5>
                                    <p>Pfizer Pulmonary Lead Gen Chicago</p>
                                </div>
                                <div>
                                    <h5>Tracking Code</h5>
                                    <p>12344768201</p>
                                </div>
                                <div>
                                    <h5>Marketer</h5>
                                    <p>Marketer Name</p>
                                </div>
                                <div>
                                    <h5>Objective</h5>
                                    <p>Objective Name</p>
                                </div>
                                <div>
                                    <h5>Category</h5>
                                    <p>Category Name</p>
                                </div>
                                <div>
                                    <h5>Campaign Type</h5>
                                    <p>Campaign Type</p>
                                </div >
                                <div className='w-100'>
                                    <h5>Comments</h5>
                                    <p className='w-100'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using language.</p>
                                </div>
                                <div>
                                    <h5>Country</h5>
                                    <p>United States</p>
                                </div>
                                <div>
                                    <h5>Timezone</h5>
                                    <p>(PST)</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="p-20 pb-0">
                            <div className="campaign-detail-header">
                                <h3>Brand</h3>
                                <div className="campaign-detail-brand-head-inner">
                                    <p className='campaign-detail-header-description'>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                    <span><img src={menu} alt='Loading' /></span>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className='campaign-detail-brand-main-wrapper'>
                            <div className='campaign-detail-main px-3'>
                                <div>
                                    <h5>Inventory lists</h5>
                                    <p>0</p>
                                </div>
                                <div>
                                    <h5>Blocking profiles</h5>
                                    <p>0</p>
                                </div>
                                <div>
                                    <h5>Enter URLs</h5>
                                    <p>Description name</p>
                                </div>
                                <div>
                                    <h5>Objective</h5>
                                    <p>Objective Name</p>
                                </div>
                                <div>
                                    <h5>Uploaded files</h5>
                                    <p>3 uploaded files</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="p-20 pb-0">
                            <div className="campaign-detail-header">
                                <h3>Budget</h3>
                                <div className="campaign-detail-brand-head-inner">
                                    <p className='campaign-detail-header-description'>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.                                     </p>
                                    <span><img src={menu} alt='Loading' /></span>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className='campaign-detail-brand-main-wrapper'>
                            <div className='campaign-detail-main px-3'>
                                <div>
                                    <h5>Budget</h5>
                                    <p>$250.00</p>
                                </div>
                                <div>
                                    <h5>Dates</h5>
                                    <p>10/02/2022 - 12/12/2022</p>
                                </div>
                                <div>
                                    <h5>External Code</h5>
                                    <p>190131</p>
                                </div>
                                <div>
                                    <h5>Budget Cap</h5>
                                    <p>Objective Name</p>
                                </div>
                                <div>
                                    <h5>Uploaded files</h5>
                                    <p>$50,000,000.00</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CampaignCompletion
