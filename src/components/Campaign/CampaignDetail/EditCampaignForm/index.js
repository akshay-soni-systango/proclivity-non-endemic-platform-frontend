import React from 'react';
import { Row , Col } from 'react-bootstrap';
import Input from '../../../Common/Input';
import './style.scss';
import search from '../../../../assets/Icons/search.svg'
import Button from '../../../Common/Button';
const CampaignForm = () => {
  return (
    <div>
        <Row className='form-wrapper'>
            <Col className='col-md-3 form-seach-bar'>
                <div className='form-search-bar-input'>
                    <Input icon={search}/>
                </div>
            </Col>
            <Col className='col-md-6 form-main'>

              <div className='form-section-header'>
                <h2>Campaign Details</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              </div>
              <div className='form-section-button'>
                <Button text='On'/>
              </div>
              <hr/>
              <div></div>


            </Col>
            <Col className='col-md-3 form-campaign-data'>ALi</Col>
        </Row>
    </div>
  )
}

export default CampaignForm