import { useState } from "react";

const toDoCardInfoExample = [
    {
        id: "componente-1",
        title: "Title 1",
        descr: "Description 1",
        status: true
    },
    {
        id: "componente-2",
        title: "Title 2",
        descr: "Description 2",
        status: false
    }
];

const useTodo = () => {
    const [ todos, setTodos ] = useState(toDoCardInfoExample);
    
    const addNewToDoItem = ( task ) =>{
        if(!task.title | !task.descr) {
            return alert("There's no information. Please write a title and a description");
        } else{
            let newID = "componente-" + Math.floor(Math.random() * 999999);
            task.id = newID;
            setTodos([task, ...todos]);
        }
    };

    const deleteToDoItem = ( id ) => {
        const newTodos = todos.filter(item => item.id !== id);
        setTodos(newTodos);
    };

    const changeToDoState = (id) => {
        const newTodos = todos.map(item => {
            if(item.id === id){
                item.status = !item.status
            }
            return item
        });
        setTodos(newTodos);
    };

    const editToDotask = (id, newtask) => {
        const newTodos = todos.map(item => {
            if(item.id === id){
                if(newtask.title && newtask.descr){
                    item.title = newtask.title;
                    item.descr = newtask.descr;
                } else{
                    alert("Fill both form inputs!")
                }
            }
            return item
        });
        setTodos(newTodos);
    }

    return {
        todos,
        addNewToDoItem,
        deleteToDoItem,
        changeToDoState,
        editToDotask
    }
}

export default useTodo;