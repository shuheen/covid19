import React, { Component } from 'react'
import {
    Col,Row
} from 'react-bootstrap';
import Highcharts from "highcharts";
import HighchartsMap from "highcharts/modules/map";
import HighchartsReact from "highcharts-react-official";
import map from "@highcharts/map-collection/custom/world-lowres-india.json";

// import WorldMap from './worldMap';
let mapoptions;
var countrydata = require('./../../assets/data/countrycode.json');
HighchartsMap(Highcharts);
var bubbleProto = Highcharts.seriesTypes.mapbubble.prototype;

  bubbleProto.axisTypes = ['xAxis', 'yAxis', 'colorAxis'];
  bubbleProto.optionalAxis = 'colorAxis';
  bubbleProto.colorKey = 'value';

  Highcharts.wrap(bubbleProto, 'translate', function(proceed) {
    proceed.apply(this, Array.prototype.slice.call(arguments, 1));

    Highcharts.seriesTypes.heatmap.prototype.translateColors.call(this);
  });
  // Highcharts.mapDataIndex.forEach(element => {
  //   console.log(element)
  // });
//   Highcharts.setOptions({
    
//   });
class WorldMapComp extends Component {
    constructor(props){
        super(props);
        this.afterChartCreated = this.afterChartCreated.bind(this);
        this.state={
            data:[]
        }
        this.zoomMap.bind(this);
        
    }
    afterChartCreated(chart) {
        this.internalChart = chart;
        // this.forceUpdate();
    }

    mapOptions(data){
        
        return {
            chart: {
              borderWidth: 1,
              map: map,
              events:{
                  load: function(){
                     this.mapZoom(0.8);
                    //  this.get("IN").zoomTo()
                      //alert(this);
                  }
                  
              },
              panning:{
                  enabled:true,
                  type:"xy"
              },
            //   events: {
            //     load: function() {
            //       this.internalChart.mapZoom(0.5, 100, 100);
            //     }
            //   }
            },
            // lang: {
            //     numericSymbols: ["k", "M", "B", "T", "P", "E"]
            //   },
            title: {
              text: null
            },
          
            subtitle: {
              text: null
            },
          
            legend: {
              enabled: false
            },
          
            mapNavigation: {
              enabled: true,
              buttonOptions: {
                verticalAlign: "bottom"
              }
            },
            colorAxis: {
                minColor: '#ffb3b3',
                maxColor: '#990000',
                min: 1,
                max: 10,
                labels: {
                    step: 4,
                    enabled: true,
                    formatter: function () {
                        if(this.value  == 0){
                            return "0"
                        } else if(this.value  < 1500000){
                            return "1.5L"
                        }
                        // return this.value === 0 ? "Free" : "Full";    
                    }
                }  
              },
              series: [{
                data: data,
                joinBy: ['iso-a2', 'code'],
                name: 'Random data',
                states: {
                    hover: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                tooltip: {
                        pointFormat: "Total Cases in {point.name}: {point.z}"
                      },
                dataLabels: {
                    enabled: false,
                },
                // point: {
                //     events: {
                //         // On click, look for a detailed map
                //         click: function () {
                //             var key = this.key;
                //             $('#mapDropdown option').each(function () {
                //                 if (this.value === 'countries/' + key.substr(0, 2) + '/' + key + '-all.js') {
                //                     $('#mapDropdown').val(this.value).change();
                //                 }
                //             });
                //         }
                //     }
                // }
            }, {
                type: 'mapline',
                name: "Separators",
                data: data,
                nullColor: 'gray',
                showInLegend: false,
                enableMouseTracking: false
            }]
            // series: [
            //   {
            //     name: "Countries",
            //     color: "#E0E0E0",
            //     enableMouseTracking: false
            //   },
            //   {
            //     type: "mapbubble",
            //     name: "Covd-19",
            //     joinBy: ["iso-a2", "code"],
            //     data: data,
            //     minSize: 4,
            //     maxSize: "12%",
            //     tooltip: {
            //       pointFormat: "Total Cases in {point.name}: {point.z}"
            //     }
            //   }
            // ]
          }
    }
    componentDidUpdate(){
        
        // console.log(this.internalChart)
        // this.internalChart.mapZoom(0.7,1500,200)
        // this.internalChart.redraw()
    }
    componentDidMount(){
        
        var mapdata = [];
        mapoptions = 
        fetch("https://covid19corona.herokuapp.com/api/getAllData", {
            "method": "GET",    
        })
        .then(response => response.json())
        .then(resp=>{
            countrydata.map((v,i)=>{
                resp.response.map((val,ind)=>{
                        if(v.name.toLowerCase() == val.country.toLowerCase()){
                            mapdata.push({code:v.code.toUpperCase(),id:v.code.toUpperCase(),name:v.name,z:val.cases.total,value:(val.cases.total/15000)})
                        }
                })
            })
            // console.log();
            // this.mapoptions.series[1].data = mapdata;
            // this.allowChartUpdate = false;
            this.setState({"data":mapdata});
            
            // this.mapOptions.call(this, mapdata));
            
        })
        .catch(err => {
            console.log(err);
        });
    }
    zoomMap(chart){
      // this.internalChart.get("IN").zoomTo();
        // console.log(this.internalChart.__proto__.mapZoom(2,100,100,100,100));
          // console.log(chart.get("IN"));
          // chart.get("IN").zoomTo();
          // console.log(dt)
          // console.log(chart.__proto__)
          // console.log(chart)
          // console.log(chart.get("IN").zoomTo);
    }
    render() {
        // console.log(mapoptions)
        
        return (
          <Col md={12}>
            <Row><Col md={12} > <div id="mapBox">
          <div id="up"></div>
          <div className="selector">
              <button id="btn-prev-map" className="prev-next"><i className="fa fa-angle-left"></i></button>
              <select id="mapDropdown" className="ui-widget combobox"></select>
              <button id="btn-next-map" className="prev-next"><i className="fa fa-angle-right"></i></button>
          </div>
          <div id="container"></div> 
      </div></Col></Row>
        <Row>
          <Col md={12} >
            <HighchartsReact
                        highcharts={Highcharts}
                        options={this.mapOptions.call(this,this.state.data)}
                        constructorType={"mapChart"}
                        callback={this.afterChartCreated}
                    />
            <button onClick={this.zoomMap.bind(this, this.internalChart)}>Zoom</button>
          </Col>
        </Row>
        </Col>
        )
    }
}

export default WorldMapComp
