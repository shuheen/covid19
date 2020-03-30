import React, { Component } from 'react'
import {
    Row,
    Col,Container
} from 'react-bootstrap';
import TopWidget from './topWidget';
import WorldMapComp from './worldMap';
import SearchBox from './searchbox';


export class Home extends Component {
    constructor(props){
        super(props);
      
    }
    
    


    render() {
        // console.log(this.state.data);
        return (
            <div className="main-wrapper">
                <Container>
                    <SearchBox/>
                    <Row className="mb-7">
                        <Col md={12}><h2>Global Summary</h2></Col>
                        <TopWidget/>
                    </Row>
                    <Row className="my-2">
                        <Col md={12}><h2>Total Cases Visualisation</h2></Col>
                        <WorldMapComp/>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home
