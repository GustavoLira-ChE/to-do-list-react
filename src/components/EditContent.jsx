import React, {useContext} from 'react';

import ToggleEditContext from '../context/ToggleEditContext';
import EditToDo from './EditToDo';

const EditContent = () => {

    const {toggle} = useContext(ToggleEditContext);

    return (
        <div>
            {toggle && <EditToDo />}
        </div>
    );
};

export default EditContent;