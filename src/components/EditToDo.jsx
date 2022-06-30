import React from 'react';

const EditToDo = () => {
    return (
        <div className="edit-component">
            <div className="container d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <div className="dialogue-box">
                    <h3 style={{backgroundColor: "white", borderRadius: "4px"}}>Edit task</h3>
                    <form>
                        <input 
                            id="input-id"
                            type="text"  
                            placeholder="New Title" className="form-control"
                            name="title" 
                            />
                        <textarea 
                            id="input-description"
                            placeholder="New Description" 
                            className="form-control mt-2"
                            name="description" 
                            cols="30" 
                            rows="10"
                            ></textarea>
                        <div className="d-flex justify-content-between">
                            <button 
                                className="btn btn-primary btn-block mt-2"
                                >Update task</button>
                            <button
                                className="btn btn-danger btn-block mt-2"
                            >Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditToDo;