import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts';
import { data } from '../../../../util/ChartData/viewreport';
import Dropdown from '../../../Common/Dropdown';

const ViewReportGraph = () => {
    return (
        <div>
            <Row>
                <Col className='col-md-3 d-flex'>
                    <Dropdown preValue="static:" className="formikSelect" />
                    <Dropdown preValue="static:" className="formikSelect" />
                    <Dropdown preValue="static:" className="formikSelect" />
                </Col>
            </Row>
            <BarChart width={730} height={350} data={data}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="uv" />
                <YAxis hide={false} dataKey='amount' type="number" domain={[0, 800]} ticks={[100, 200, 300, 400, 500, 600, 700, 800]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="amt" fill="#4A5578" barSize={67.24} />
            </BarChart>
        </div>
    )
}
export default ViewReportGraph

