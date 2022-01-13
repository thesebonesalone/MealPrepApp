import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function IngredientMicroView(props)
{
    return (
    <Card>
        <Card.Header>
            {props.ig.name}
        </Card.Header>
        <Container>
            <Row>
                <Col>
                    Cal: {props.ig.calories}
                </Col>
                <Col>
                    Fat: {props.ig.fat}
                </Col>
                <Col>
                    Carbs: {props.ig.carbs}
                </Col>
                <Col>
                    Protein: {props.ig.protein}
                </Col>
            </Row>
        </Container>
        </Card>
    )

}

export default IngredientMicroView