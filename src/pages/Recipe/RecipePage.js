import React, {useState} from "react";
import { Col, Container, Form, Nav, Row, Tabs, Tab } from "react-bootstrap";
import RecipesNew from "./Sorts/RecipesNew";
import filter_icon from '../../Icons/Filter_Icon.png'

function RecipePage(props) {
    const [query, setQuery] = useState("")

    function updateQuery(e)
    {
        setQuery(e.value)
    }
    return (
        <Container>
            <Row>
                Recipes
            </Row>
            
            <Tabs>
                <Tab eventKey="results" title="Results">
                    Results
                </Tab>
                <Tab eventKey="filter" title="Filters">
                    Filters
                    <Row>
                        <Form.Control value={query} placeholder="Search" onChange={updateQuery}/>
                    </Row>
                    <Form>
                        <Row>
                            <Form.Label>Fat</Form.Label>
                            <Col>
                                <Form.Control placeholder="min"></Form.Control>
                            </Col>
                            <Col>
                                <Form.Control placeholder="max"></Form.Control>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Form.Label>Carbs</Form.Label>
                            <Col>
                                <Form.Control placeholder="min"></Form.Control>
                            </Col>
                            <Col>
                                <Form.Control placeholder="max"></Form.Control>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Form.Label>Protein</Form.Label>
                            <Col>
                                <Form.Control placeholder="min"></Form.Control>
                            </Col>
                            <Col>
                                <Form.Control placeholder="max"></Form.Control>
                            </Col>
                        </Row>
                        

                    </Form>
                </Tab>
                <Tab eventKey="create" title="Create">
                    Create New Recipe
                </Tab>
            </Tabs>

        </Container>
    )
}

export default RecipePage