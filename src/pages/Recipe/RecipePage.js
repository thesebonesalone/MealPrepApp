import React, {useEffect, useState} from "react";
import { Col, Container, Form, Nav, Row, Tabs, Tab, Button, Modal } from "react-bootstrap";
import RecipesNew from "./Sorts/RecipesNew";
import filter_icon from '../../Icons/Filter_Icon.png'
import IngredientForm from "../Ingredients/IngredientForm";
import IngredientSearch from "../Ingredients/IngredientSearch";
import IngredientMicroView from "../Ingredients/IngredientMicroView";
import { site } from "../../site";
import jwt_decode from "jwt-decode"

function RecipePage(props) {
    const [query, setQuery] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [instruction, setInstructions] = useState([])
    const [name, setName] = useState("")

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

    function handleName(e)
    {
        setName(e.target.value)
    }

    function updateQuery(e)
    {
        setQuery(e.value)
    }
    function submitRecipe(e)
    {
        e.preventDefault()
        let recipe = {name: name

        }
        let data = {recipe: recipe, ingredients: ingredients, user_id: props.user.id}
        console.log(data)
        let awt = {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify(data)}
        fetch(site + "/recipe",awt)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp.message)
            if (resp.message == "Success")
            {
                console.log(jwt_decode(resp.token))
                localStorage.setItem('AUTH_TOKEN',resp.token)
                props.login()
            }
            
        }) 
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
                    <Container className="overflow-auto">
                        Create New Recipe
                        <Form onSubmit={submitRecipe}>
                            <Form.Control value={name} onChange={handleName} placeholder="Recipe Name"></Form.Control>
                            <Button variant="primary" onClick={() => setShowIgSearch(true)}>Add Ingredient</Button>
                            <Button variant="secondary" onClick={() => setShowIngredient(true)}>New Ingredient</Button>
                            {ingredients.map((item) => {return (
                            <Container id={item.index}>
                                <Row>
                                    <Col xs={1}>
                                        <Button variant="danger">X</Button>
                                    </Col>
                                    <Col xs={11}>
                                        <IngredientMicroView ig={item}/>
                                    </Col>
                                </Row>
                                <Row>
                                    
                                    <Col>
                                        Serving Size: {item.serving_type ? "" + item.serving_size + " mls" : "" + item.serving_size + " grams"}
                                    </Col>
                                    
                                </Row>
                            </Container>
                            )})}
                        <Button type="submit">Submit</Button>
                        </Form>
                    </Container>
                    
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