import React from 'react';
import { Card } from 'react-bootstrap'
import Dropdown from '../../Common/Dropdown'
import TeamsTable from './TeamsTable'

const TeamsPage = () => {
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
          <div className='search-filter-sort'>
            <Dropdown/>
            <Dropdown/>
            <Dropdown/>
          </div>
          <div className='admin-table'>
            <TeamsTable/>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TeamsPage
