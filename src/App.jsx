import React from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import { ToDoProvider } from './context/ToDoContext';

const App = () => {
    return (
        <div>
            <ToDoProvider>
                <div className='container mt-4'>
                    <div className='row'>
                        <div className='col-8'>
                            <ToDoList />
                        </div>
                        <div className='col-4'>
                            <ToDoForm />
                        </div>
                    </div>
                </div>
            </ToDoProvider>
        </div>
        
    );
};

export default App;