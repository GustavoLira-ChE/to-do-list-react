import React, { useRef, useContext} from 'react';
import ToDoContext from '../context/ToDoContext';

const ToDoForm = () => {

    const { addNewToDoItem } = useContext(ToDoContext);
    const form = useRef(null);

    const handleFormValues = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            id: null,
            title: formData.get("title"),
            descr: formData.get("description"),
            status: false
        }
        addNewToDoItem(data);
    }
    return (
        <div>
            <h1>New Task</h1>
            <form ref={form}>
                <input 
                    type="text"  
                    placeholder="Title" className="form-control"
                    name="title" 
                    />
                <textarea 
                    placeholder="Description" 
                    className="form-control mt-2"
                    name="description" 
                    cols="30" 
                    rows="10"
                    ></textarea>
                <button 
                    className="btn btn-primary btn-block mt-2"
                    onClick={handleFormValues}
                    >Add Task</button>
            </form>
        </div>
    );
};

export default ToDoForm;