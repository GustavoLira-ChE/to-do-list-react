import React, { useContext } from 'react';
import ToDoCard from './ToDoCard';
import ToDoContext from "../context/ToDoContext"


const ToDoList = () => {

    const { todos } = useContext(ToDoContext);

    return (
        <div>
            <h1>To Do List</h1>
            {todos.map(item => <ToDoCard toDo={item} key={item.id}/>)}
        </div>
    );
};

export default ToDoList;