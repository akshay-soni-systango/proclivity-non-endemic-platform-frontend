import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ChartData } from '../../util/ChartData';


const Charts = () => {
    // const options = {
    //     title: {
    //         text: 'My chart'
    //     },
    //     series: [{
    //         data: [1, 2, 3 , 4,4,5,6,7,8,9,0]
    //     }]
    // }
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