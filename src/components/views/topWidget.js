import React from 'react'
import {Card} from 'react-bootstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const options = {
    chart: {
        type: 'areaspline',
        height: 40,
        margin: [0, 0, 0, 0],
        spacing:[0,0,0,0]
    },
    title:{
        text:null
    },
    legend: {
        enabled:false,
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
        gridLineWidth: 0,
        categories: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ],
        // plotBands: [{ // visualize the weekend
        //     from: 4.5,
        //     to: 6.5,
        //     color: 'rgba(68, 170, 213, .2)'
        // }],
        labels:{
            enabled:false,
            title:{
                enabled:false
            }
        },
       
    },
    yAxis: {
        gridLineWidth: 0,
        title: {
            text: null
        },
        labels:{
            enabled:false,
            title:{
                enabled:false
            }
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0,
            gapSize: 0
        }
    },
    series: [{
        name: 'John',
        data: [3, 4, 3, 5, 4, 10, 12]
    }]
};
function TopWidget() {
    return (<div>
        <Card>
            <Card.Body>
                <Card.Title>Hello</Card.Title>
                <Card.Text>lorem Ipsum dolor sit amet</Card.Text>
            </Card.Body>
            <Card.Footer className="p-0">
                <HighchartsReact highcharts={Highcharts} options={options} />
            </Card.Footer>
        </Card>
        
</div>)
}

export default TopWidget
