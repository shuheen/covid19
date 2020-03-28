import React, { Component } from 'react'
import {
    Row,
    Col,Container
} from 'react-bootstrap';
import TopWidget from './topWidget';
export class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        fetch("https://covid-193.p.rapidapi.com/statistics", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "63600dc988msh87da34cf0d7b124p14ce99jsnb331277689b3"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
    }


    render() {
        return (
            <div className="main-wrapper">
                <Container>
                    <Row>
                        <Col md={3} lg={3}>
                            <TopWidget />
                        </Col>
                        <Col md={3} lg={3}>
                            <TopWidget />
                        </Col>
                        <Col md={3} lg={3}>
                            <TopWidget />
                        </Col>
                        <Col md={3} lg={3}>
                            <TopWidget />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home
