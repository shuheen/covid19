import React, { Component } from 'react'
import {
    Row,
    Col,Container
} from 'react-bootstrap';
import TopWidget from './topWidget';
export class Home extends Component {
    render() {
        return (
            <div class="main-wrapper">
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
