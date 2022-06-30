import React, {useContext} from 'react';
import ToDoContext from '../context/ToDoContext';
import ToggleEditContext from '../context/ToggleEditContext';

const ToDoCard = ({ toDo }) => {

    const { deleteToDoItem, changeToDoState } = useContext(ToDoContext);
    const { handleToggle } = useContext(ToggleEditContext);

    return (
            <div className='card mt-2'>
                <div className='card-body'>
                    <h3 className='card-title'>
                        {toDo.title}
                        <button className={`btn btn-sm ${toDo.status ? "btn-success" : "btn-outline-success"} m-2`} onClick={()=>changeToDoState(toDo.id)}>{toDo.status ? "Finished" : "Finish"}</button>
                    </h3>
                    <p className='card-text'>
                        {toDo.descr}
                    </p>
                    <hr />
                    <div className='d-flex justify-content-end'>
                        <button 
                            className='btn btn-sm btn-outline-primary me-2' 
                            onClick={()=> handleToggle(toDo.id)}>
                            Edit
                        </button>
                        <button className='btn btn-sm btn-outline-danger me-2' onClick={()=> deleteToDoItem(toDo.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default ToDoCard;