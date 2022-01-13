import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


function IngredientForm(props) {
    const [name, setName] = useState("")
    const [calories, setCalories] = useState(0)
    const [fat, setFat] = useState(0)
    const [carbs, setCarbs] = useState(0)
    const [protein, setProtein] = useState(0)
    const [size, setSize] = useState(0)
    const [sizeMultiplier, setSizeMultiplier] = useState(1)
    const [type, setType] = useState(false)
    const [meat, setMeat] = useState(false)
    const [fish, setFish] = useState(false)
    const [dairy, setDairy] = useState(false)
    const [nonVegan, setNonVegan] = useState(false)
    const [haram, setHaram] = useState(false)
    const [trefah, setTrefah] = useState(false)

    function handleName(e)
    {
        var val = e.target.value
        setName(val)
    }
    function handleCalories(e)
    {
        var val = e.target.value
        setCalories(val)
    }
    function handleFat(e)
    {
        var val = e.target.value
        setFat(val)
    }
    function handleCarbs(e)
    {
        var val = e.target.value
        setCarbs(val)
    }
    function handleProtein(e)
    {
        var val = e.target.value
        setProtein(val)
    }

    function handleSubmit(e)
    {
        e.preventDefault()
        let item = {id: null,
        name: name,
        brand: null,
        calories: calories,
        fat: fat,
        carbs: carbs,
        protein: protein,
        serving_type: type,
        serving_size: size * sizeMultiplier,
        meat: meat,
        fish: fish,
        dairy: dairy,
        nonvegan: nonVegan,
        haram: haram,
        trefah: trefah}
        console.log(item)
        props.addIngredient(item)
    }

    function handleSize(e)
    {
        setSize(e.target.value)
    }

    function handleSelect(e)
    {
        let at = e.target.selectedIndex
        console.log(e.target)
        setSizeMultiplier(parseFloat(e.target.children[at].dataset.size))
        setType(e.target.value == "true")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Ingredient Name</Form.Label>
                <Container>
                    <Row>
                        <Form.Control value={name} placeholder="Ingredient Name" onChange={handleName}/>
                    </Row>
                </Container>
                <Form.Label>Calories</Form.Label>
                <Form.Control value={calories} onChange={handleCalories} placeholder="Calories"/>
                <Form.Label>Fat</Form.Label>
                <Form.Control value={fat} onChange={handleFat} placeholder="Fat"/>
                <Form.Label>Carbs</Form.Label>
                <Form.Control value={carbs} onChange={handleCarbs} placeholder="Carbs"/>
                <Form.Label>Protein</Form.Label>
                <Form.Control value={protein} onChange={handleProtein} placeholder="Protein"/>
                <Form.Label>Serving Size</Form.Label>
                <Container>
                    <Row>
                        <Col>
                            <Form.Control value={size} placeholder="Size" onChange={handleSize}/>
                        </Col>
                        <Col>
                            <Form.Select onChange={handleSelect}>
                                <option value={false} data-size={1}>Grams</option>
                                <option value={true} data-size={237}>Cups</option>
                                <option value={true} data-size={4.929}>Tsp</option>
                                <option value={true} data-size={14.787}>Tbsp</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    
                </Container>
                
                <Container>
                    <Row>
                        <Col>
                            <Form.Check value={meat} onChange={() => setMeat(!meat)} type="checkbox" label="Meat"/>
                        </Col>
                        <Col>
                            <Form.Check value={fish} onChange={() => setFish(!fish)} type="checkbox" label="Fish"/>
                        </Col>
                        <Col>
                            <Form.Check value={dairy} onChange={() => setDairy(!dairy)} type="checkbox" label="Dairy"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Check value={nonVegan} onChange={() => setNonVegan(!nonVegan)} type="checkbox" label="Non-Vegan"/>
                        </Col>
                        <Col>
                            <Form.Check value={haram} onChange={() => setHaram(!haram)} type="checkbox" label="Haram"/>
                        </Col>
                        <Col>
                            <Form.Check value={trefah} onChange={() => setTrefah(!trefah)} type="checkbox" label="Trefah"/>
                        </Col>
                    </Row>
                </Container>

            
            </Form.Group>
            <Row>
                <Button type="submit">Submit</Button>
            </Row>
            
        </Form>
    )
}

export default IngredientForm