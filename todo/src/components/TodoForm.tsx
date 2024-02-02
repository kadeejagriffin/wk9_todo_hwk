import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { ToDoFormObject } from "./types";



type ToDoFormProps = {
    addNewToDo: (newToDoObject: ToDoFormObject ) => void
}

export default function TodoForm({ addNewToDo }: ToDoFormProps) {
    const [showForm, setShowForm] = useState(false);
    const [newToDo, setNewToDo] = useState<ToDoFormObject>({name:'', description:'', dueDate:''})

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewToDo({...newToDo, [event.target.name]: event.target.value})
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        addNewToDo(newToDo);

        setShowForm(false);
        setNewToDo({name:'', description:'', dueDate:''})

    }


    return (
        <>
            <Row>
                <Col xs={12}>
                    <Button variant={showForm ? 'danger' : 'primary'} className="w-100 my-3" onClick={() => setShowForm(!showForm)}>{ showForm ? 'Close Form' : 'Add To Do + '}
                    </Button>
                </Col>
            </Row>
                {showForm && (
            <Row>
                <Col>
                    <Card.Body>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3">
                            <Form.Label>To Do Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="'Enter To Do Name" required value= {newToDo.name} onChange={handleInputChange}/>
                            <Form.Label>To Do Description</Form.Label>
                            <Form.Control type="text" name="description" placeholder="'Enter To Do Description" required value= {newToDo.description} onChange={handleInputChange}/>
                            <Form.Label>Due Date(optional)</Form.Label>
                            <Form.Text className="text-muted"> Please enter due date in the form of YYYY-MM-DD HH:MM:SS</Form.Text>
                            <Form.Control type="text" name="dueDate" placeholder="'Enter To Do Date" required value= {newToDo.dueDate} onChange={handleInputChange}/>
                            </Form.Group>
                            <Button variant="outline-success" className="w-100" type="submit">Create To Do</Button>
                        </Form>
                    </Card.Body>
                </Col>
            </Row>
            )}
        </>
    )
}