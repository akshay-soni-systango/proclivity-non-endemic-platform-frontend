import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ChartData } from '../../util/ChartData';


const Charts = () => {
   
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={ChartData}
            />
        </div>
    )
}

export default Charts