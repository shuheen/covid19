import React, { useState } from 'react'
import {Card, Col} from 'react-bootstrap';
import Highcharts from 'highcharts';
import { useEffect } from 'react';


function makeWidgetData(json){
    
   
   
    var wData = [];
    for(var v in json){
        console.log(v);
        wData.push({
            "name": v.toUpperCase(),
            "count":json[v],
        })
    }
    return wData;
    
}
function TopWidget() {
    const [widget,setWidget] = useState([])

    useEffect(()=>{
        fetch('https://covid-19-data.p.rapidapi.com/totals?format=undefined',{
            "headers": {
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "63600dc988msh87da34cf0d7b124p14ce99jsnb331277689b3"
            }
        }).then(res => res.json())
        .then(json => {
            setWidget(makeWidgetData(json[0]))
        }).catch(err=>console.log(err));
    },[0.5])
    console.log(widget)
    return (
         widget.map((val,key)=>{
                return <Col md={3} key={key}><Card >
                    <Card.Body>
              <Card.Text className="fs-12 mb-1">{val.name}</Card.Text>
              <Card.Title className="mb-0 h3">{val.count}</Card.Title>
                    </Card.Body>
                    {/* <Card.Footer className="p-0">
                        <HighchartsReact highcharts={Highcharts} options={options} />
                    </Card.Footer> */}
                </Card></Col>
              })
    )
}

export default TopWidget
