import React from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import EditContent from './components/EditContent';
import { ToDoProvider } from './context/ToDoContext';
import { ToggleEditProvider } from './context/ToggleEditContext';

const App = () => {
    
    return (
            <div className='container pt-4 relative-container'>
                <ToDoProvider>
                    <ToggleEditProvider>
                        <div className='row'>
                            <div className='col-8'>
                                <ToDoList />
                            </div>
                            <div className='col-4'>
                                <ToDoForm />
                            </div>
                        </div>
                        <EditContent />
                    </ToggleEditProvider>
                </ToDoProvider>
            </div>
    );
};

export default App;