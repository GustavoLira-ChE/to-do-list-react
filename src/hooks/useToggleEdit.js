import { useState } from "react";

const useToggleEdit = () => {
    
    const [ toggle, setToggle ] = useState(false);
    const [ id, setId ] = useState(undefined);

    const handleToggle = (idcode) =>{
        console.log(idcode)
        setToggle(!toggle);
        setId(idcode);
    }

    return {
        toggle,
        id,
        handleToggle
    }
}

export default useToggleEdit;