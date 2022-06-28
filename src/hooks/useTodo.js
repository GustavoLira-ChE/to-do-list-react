import { useState } from "react";

const toDoCardInfoExample = [
    {
        id: 1,
        title: "Title 1",
        descr: "Description 1",
        status: true
    },
    {
        id: 2,
        title: "Title 2",
        descr: "Description 2",
        status: false
    }
];

const useTodo = () => {
    const [ todos, setTodos ] = useState(toDoCardInfoExample);
    let newID = 0;
    const addNewToDoItem = ( task ) =>{
        try{
            newID = todos[todos.length - 1].id + 1;
        } catch{
            newID = 1
        }
        task.id = newID;
        setTodos([...todos,task]);
    };

    const deleteToDoItem = ( id ) => {
        const newTodos = todos.filter(item => item.id !== id);
        setTodos(newTodos);
    };

    const changeToDoState = (id) => {
        console.log(id);
        const newTodos = todos.map(item => {
            if(item.id === id){
                item.status = !item.status
            }
            return item
        });
        setTodos(newTodos);
    }

    return {
        todos,
        addNewToDoItem,
        deleteToDoItem,
        changeToDoState
    }
}

export default useTodo;