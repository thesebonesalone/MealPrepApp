import { render } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import { capitalize, site } from '../site'


function ProfileGlance(props) {
    const [user,setUser] = useState(null)
    useEffect(() => {
        fetch(site + "/user/goals/" + props.user.username)
        .then(resp => resp.json())
        .then(resp => {
            setUser(resp.user)
        })
    },[])
    return(
        <Card>
            <Card.Title>{capitalize(props.user.username)} At a Glance</Card.Title>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>Calories</Col>
                        <Col>Fat</Col>
                        <Col>Carbs</Col>
                        <Col>Protein</Col>
                    </Row>
                    
                        {user != null ? 
                        <Row>
                            <Col>{user.calories}</Col>
                            <Col>{user.fat}</Col>
                            <Col>{user.carbs}</Col>
                            <Col>{user.protein}</Col>
                        </Row>
                        : null}
                </Container>
            </Card.Body>
        </Card>
    )
}

export default ProfileGlance