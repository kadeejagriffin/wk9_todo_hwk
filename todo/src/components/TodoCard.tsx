import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import { ToDo } from '../components/types'


type ToDoCardProps = {
    todo: ToDo
}



export default function TodoCard({ todo }: ToDoCardProps) {
    return (
        <Col xs={12} md={6} lg={4}>
            <Card bg={todo.completed ? 'success': 'info'} text="white" className='my-3'>
                <Card.Header>{todo.dateCreated.toString()}</Card.Header>
                <Card.Body>
                    <Card.Title>{todo.name}</Card.Title>
                    <Card.Text>{todo.description}</Card.Text>
                </Card.Body>
                {todo.dueDate && <Card.Footer>{todo.dueDate.toString()}</Card.Footer> }
            </Card>
        </Col>
    )
}