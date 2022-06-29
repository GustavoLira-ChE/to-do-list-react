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
    };

    const handleTextArea = (event) => {
        event.preventDefault();
        document.getElementById("input-id").value = ""
        document.getElementById("input-description").value = ""
    }
    return (
        <div>
            <h1>New Task</h1>
            <form ref={form}>
                <input 
                    id="input-id"
                    type="text"  
                    placeholder="Title" className="form-control"
                    name="title" 
                    />
                <textarea 
                    id="input-description"
                    placeholder="Description" 
                    className="form-control mt-2"
                    name="description" 
                    cols="30" 
                    rows="10"
                    ></textarea>
                <div className="d-flex justify-content-between">
                    <button 
                        className="btn btn-primary btn-block mt-2"
                        onClick={handleFormValues}
                        >Add Task</button>
                    <button
                        className="btn btn-danger btn-block mt-2"
                        onClick={handleTextArea}
                    >Clear Text</button>
                </div>
            </form>
        </div>
    );
};

export default ToDoForm;