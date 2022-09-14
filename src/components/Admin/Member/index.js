import React from 'react';
import { Card } from 'react-bootstrap';
import './style.scss';

const MemberPage = () => {
  return (
    <div>
      <Card>
        <Card.Body>
            <div className='card-title'>
                <h2>All Members</h2>
                <span>
                    100 active
                </span>
            </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MemberPage
