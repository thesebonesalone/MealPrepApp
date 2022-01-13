import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { site } from "../../site";
import IngredientMicroView from "./IngredientMicroView";

function IngredientSearch(props)
{
    const [query, setQuery] = useState("")
    const [list, setList] = useState([{name: "test"}])

    function search()
    {
        if (query != "")
        {
            fetch(site + "/ingredient/search/" + query)
            .then(resp => resp.json())
            .then(resp => {
            console.log(resp)
            setList(resp.results)
        })
        }
        

    }

    function handleQuery(e)
    {
        setQuery(e.target.value)
    }

    return (
        <Container>
            <Form>
                <Form.Control value={query} onChange={handleQuery} placeholder="Search Ingredients"/>
                <Button variant="primary" onClick={search}>Search</Button>
            </Form>
            {list.map((item) => {
               return  (
               <Container>
                   <Row>
                   <IngredientMicroView ig={item}/>
                   <Button onClick={() => props.addIngredient(item)}>Add</Button>
                   </Row>
                </Container>)
            })}
        </Container>
    )
}

export default IngredientSearch