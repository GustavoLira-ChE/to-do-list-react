import React from "react";
import useToggleEdit from "../hooks/useToggleEdit";

const ToggleEditContext = React.createContext({});

const ToggleEditProvider = ( {children} ) =>{
    
    const toggleEditObject = useToggleEdit();
    
    return(
        <ToggleEditContext.Provider value={toggleEditObject}>
            { children }
        </ToggleEditContext.Provider>
    )
}

export default ToggleEditContext;

export { ToggleEditProvider };