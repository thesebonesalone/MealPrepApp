import { render } from '@testing-library/react'
import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'


function ProfileGlance(props) {
    return(
        <Card>
            <Card.Title>{props.user.username} At a Glance</Card.Title>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>Calories</Col>
                        <Col>Fat</Col>
                        <Col>Carbs</Col>
                        <Col>Protein</Col>
                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default ProfileGlance