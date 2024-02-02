import { useState } from "react";
import TodoDisplay from "../TodoDisplay";
import TodoForm from "../TodoForm";
import { ToDo, ToDoFormObject }  from '../types';

type Props = {}

export default function ToDoo({}: Props) {
    const [ todos, setToDo ] = useState<ToDo[]>([]);

    const addNewToDo = (newToDoData: ToDoFormObject) => {
        let newToDo:ToDo = {
            id: todos.length + 1,
            name: newToDoData.name!,
            description: newToDoData.description!,
            dateCreated: new Date(),
            completed: true 
        }
        if (newToDoData.dueDate){
            newToDo.dueDate = new Date (newToDoData.dueDate)
        }
        setToDo([...todos, newToDo])

    }

    return (
    <>
        <TodoForm addNewToDo={addNewToDo} />
        <TodoDisplay todos={todos} />
    </>

    )
}