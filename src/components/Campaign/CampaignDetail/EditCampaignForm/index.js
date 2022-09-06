import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Input from '../../../Common/Input';
import { Formik, Form, Field } from 'formik';
import './style.scss';
import search from '../../../../assets/Icons/search.svg'
import Button from '../../../Common/Button';
import questionMark from '../../../../assets/Icons/questionMark.svg'
const CampaignForm = () => {
    return (
        <>
            <Row className='form-wrapper'>
                <Col className='col-md-3 form-seach-bar'>
                    <div className='form-search-bar-input'>
                        <Input placeholder="Search" icon={search} />
                    </div>
                </Col>
                <Col className='col-md-6'>
                    <div className='form-main'>
                        <div className='form-section-header'>
                            <h2>Campaign Details</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        </div>
                        <div className='form-section-button'>
                            <Button text='On' />
                        </div>
                    </div>
                    <hr />
                    <div className='form-section-body'>
                        <Formik>
                            <Form>
                                <label>Ad Group Name</label>
                                <Field />
                            </Form>
                        </Formik>
                    </div>
                </Col>
                <Col className='col-md-3 form-campaign-data'>
                    <div className='campaign-details'>
                        <h4 className='campaign-details-campaign-name'>Campaign Name</h4>
                        <p className='campaign-details-tracking-code'>
                            Tracking Code 567890
                        </p>
                        <div className='campaign-details-status'>
                            <p className='status-heading'> Status</p>
                            <p className='btn btn-primary'>Active</p>
                        </div>
                    </div>
                    <hr />
                    <div className='campaign-detail-names'>
                        <div className='marketer-name'>
                            <div className='heading-wrapper'>
                                <h3 className='heading'>Marketer</h3>
                                <img src={questionMark} alt='Loading' />
                            </div>
                            <text className='name'>Marketer Name</text>
                        </div>
                        <div className='advertiser-name'>
                            <div className='heading-wrapper'>
                                <h3 className='heading'> Advertiser</h3>
                                <img src={questionMark} alt='Loading' />
                            </div>
                            <text className='name'>Advertiser Name</text>
                        </div>
                        <div className='category-name'>
                            <div className='heading-wrapper'>
                                <h3 className='heading'>Category</h3>
                                <img src={questionMark} alt='Loading' />
                            </div>
                            <text className='name'>Category Name</text>
                        </div>
                        <div className='type-name'>
                            <div className='heading-wrapper'>
                                <h3 className='heading'>Campaign Type</h3>
                                <img src={questionMark} alt='Loading' />
                            </div>
                            <text className='name'>Name Type</text>
                        </div>
                    </div>
                    <hr />
                    <div className='campaign-budget'>
                        <div className='campaign-budget-amount' >
                            <div className='heading-wrapper'>
                                <h3 className='heading'>Budget</h3>
                                <img src={questionMark} alt='Loading' />
                            </div>
                            <text className='amount'>$5,000,000.00</text>
                        </div>
                        <div className='campaign-budget-remaining'>
                            <div className='heading-wrapper'>
                                <h3 className='heading'>Remaining</h3>
                                <img src={questionMark} alt='Loading' />
                            </div>
                            <text className='budget-remaining-amount'>$2,500,000.00</text>
                        </div>
                    </div>
                    <hr />
                    <div className='campaign-spend'>
                        <div className='campaign-spend-amount' >
                            <div className='heading-wrapper'>
                                <h3 className='heading'>Spend</h3>
                                <img src={questionMark} alt='Loading' />
                            </div>
                            <text className='amount'>$2,500,000.00 (50%)</text>
                        </div>
                        <div className='campaign-spend-projectedspend'>
                            <div className='heading-wrapper'>
                                <h3 className='heading'>Projected Spend</h3>
                                <img src={questionMark} alt='Loading' />
                            </div>
                            <text className='projected-spend-amount'>$4,999,900.25</text>
                        </div>
                        <div className='campaign-spend-projectedspend'>
                            <div className='heading-wrapper'>
                                <h3 className='heading'>Deviation</h3>
                                <img src={questionMark} alt='Loading' />
                            </div>
                            <text className='projected-spend-amount'>$100.00</text>
                        </div>
                    </div>
                    <hr />
                </Col>
            </Row>
        </>
    )
}

export default CampaignForm