import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

function InstructionForm(props)
{
    const [instruction, setInstruction] = useState("")

    function handleInstruction(e)
    {
        setInstruction(e.target.value)
    }

    function handleSubmit(e)
    {
        e.preventDefault()
        props.addInstruction(instruction)
        setInstruction("")
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Control value={instruction} placeholder="Enter Instructions" onChange={handleInstruction}/>
                <Button variant="primary" type="submit">Add Instruction</Button>
            </Form>
        </Container>
    )
}

export default InstructionForm