import React from "react";
import useTodo from "../hooks/useTodo";

const ToDoContext = React.createContext({});
const ToDoProvider = ( {children} ) => {
    
    const toDoHookObject = useTodo();
    
    return(
        <ToDoContext.Provider value={toDoHookObject}>
            { children }
        </ToDoContext.Provider>
    );
};

export default ToDoContext;
export {ToDoProvider};