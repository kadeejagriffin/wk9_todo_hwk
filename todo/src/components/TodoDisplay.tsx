import Row from 'react-bootstrap/Row';
import TodoCard from './TodoCard';
import Col from 'react-bootstrap/Col'
import { ToDo } from '../components/types'



type ToDoDisplayProps = {
    todos: ToDo[]
}

export default function TodoDisplay({todos}: ToDoDisplayProps) {
    const completedToDo = todos.filter( t => t.completed);
    const pendingToDo = todos.filter(t => !t.completed);
    return (
        <>
            <Row>
                <Col xs={12}>
                    <h2 className='text-center'> Pending To Do</h2>
                </Col>
                {pendingToDo.map(t => <TodoCard todo={t} key={t.id} />)}
            </Row>
            <Row>
                <Col xs={12}>
                    <h2 className='text-center'>Completed To Do</h2>
                </Col>
                {completedToDo.map(t => <TodoCard todo={t} key={t.id} />)}
            </Row>
            </>
        )
    }