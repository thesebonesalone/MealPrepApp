import React, {useEffect, useState} from "react";
import { Col, Container, Form, Nav, Row, Tabs, Tab, Button, Modal } from "react-bootstrap";
import RecipesNew from "./Sorts/RecipesNew";
import filter_icon from '../../Icons/Filter_Icon.png'
import IngredientForm from "../Ingredients/IngredientForm";
import IngredientSearch from "../Ingredients/IngredientSearch";
import IngredientMicroView from "../Ingredients/IngredientMicroView";

function RecipePage(props) {
    const [query, setQuery] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [instruction, setInstructions] = useState([])

    const [showIngredient,setShowIngredient] = useState(false)
    const [showIgSearch, setShowIgSearch] = useState(false)

    function closeIgSearch()
    {
        setShowIgSearch(false)
    }
    function closeIngredient()
    {
        setShowIngredient(false)
    }

    function addIngredient(item)
    {
        console.log(item)

        setIngredients([...ingredients, item])
    }

    function updateQuery(e)
    {
        setQuery(e.value)
    }
    return (
        <Container>
            <Row>
                <Col>
                Recipes
                </Col>
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
                        <br/>
                        <Row>
                            <Form.Label>Calories</Form.Label>
                            <Col>
                                <Form.Control placeholder="min"></Form.Control>
                            </Col>
                            <Col>
                                <Form.Control placeholder="max"></Form.Control>
                            </Col>
                            
                        </Row>
                        <br/>
                        <Row>
                            <Form.Label>Fat</Form.Label>
                            <Col>
                                <Form.Control placeholder="min"></Form.Control>
                            </Col>
                            <Col>
                                <Form.Control placeholder="max"></Form.Control>
                            </Col>
                            
                        </Row>
                        <br/>
                        <Row>
                            <Form.Label>Carbs</Form.Label>
                            <Col>
                                <Form.Control placeholder="min"></Form.Control>
                            </Col>
                            <Col>
                                <Form.Control placeholder="max"></Form.Control>
                            </Col>
                            
                        </Row>
                        <br/>
                        <Row>
                            <Form.Label>Protein</Form.Label>
                            <Col>
                                <Form.Control placeholder="min"></Form.Control>
                            </Col>
                            <Col>
                                <Form.Control placeholder="max"></Form.Control>
                            </Col>
                        </Row>
                        <br/>
                        <Button variant="secondary" type="submit">Search</Button>
                    </Form>
                </Tab>
                <Tab eventKey="create" title="Create">
                    Create New Recipe
                    <Form>
                        <Form.Control placeholder="Recipe Name"></Form.Control>
                        <Button variant="primary" onClick={() => setShowIgSearch(true)}>Add Ingredient</Button>
                        <Button variant="secondary" onClick={() => setShowIngredient(true)}>New Ingredient</Button>
                        {ingredients.map((item) => {return (
                        <Container>
                            <Row>
                                <IngredientMicroView ig={item}/>
                            </Row>
                            <Row>
                                <Col>
                                    Serving Size: {item.serving_type ? "" + item.serving_size + " mls" : "" + item.serving_size + " grams"}
                                </Col>
                                
                            </Row>
                         </Container>
                        )})}
                    </Form>
                    
                </Tab>
            </Tabs>
            <Modal show={showIgSearch} onHide={closeIgSearch}>
                <Modal.Header closeButton>
                    <Modal.Title>Search Ingredients</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <IngredientSearch addIngredient={(e) => addIngredient(e)}/>
                </Modal.Body>
            </Modal>
            <Modal show={showIngredient} onHide={closeIngredient}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Ingredient</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <IngredientForm addIngredient={(e) => addIngredient(e)}/>
                </Modal.Body>
            </Modal>

        </Container>
    )
}

export default RecipePage