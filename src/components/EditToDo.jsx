import React, {useContext, useRef} from 'react';
import ToDoContext from '../context/ToDoContext';
import ToggleEditContext from '../context/ToggleEditContext';

const EditToDo = () => {

    const form = useRef(null);
    const { handleToggle, id } = useContext(ToggleEditContext);
    const { editToDotask } = useContext(ToDoContext);

    const handleFormValues = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            title: formData.get("title"),
            descr: formData.get("description"),
            status: false
        }
        editToDotask(id,data);
        handleToggle(0);
    };

    return (
        <div className="edit-component">
            <div className="container d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <div className="dialogue-box">
                    <h3 style={{backgroundColor: "white", borderRadius: "4px"}}>Edit task</h3>
                    <form ref={form}>
                        <input 
                            type="text"  
                            placeholder="New Title" className="form-control"
                            name="title" 
                            />
                        <textarea 
                            placeholder="New Description" 
                            className="form-control mt-2"
                            name="description" 
                            cols="30" 
                            rows="10"
                            ></textarea>
                        <div className="d-flex justify-content-between">
                            <button 
                                className="btn btn-primary btn-block mt-2"
                                onClick={handleFormValues}
                                >Update task</button>
                            <button
                                className="btn btn-danger btn-block mt-2"
                                onClick={()=> handleToggle(0)}
                            >Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditToDo;