import React from 'react'
import Select2 from 'react-select2-wrapper';
import {
    Col,Row
} from 'react-bootstrap';
function SearchBox() {
    return (
        <Row>
            <Col md={12}>
                <Select2 data={[
    { text: 'bug', id: 1 },
    { text: 'feature', id: 2 },
    { text: 'documents', id: 3 },
    { text: 'discussion', id: 4 },
  ]}
  options={{
    placeholder: 'search by tags',
  }} />
            </Col>
        </Row>
    )
}

export default SearchBox
