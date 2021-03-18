import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault()     
        if (description.trim().length < 1){
            return
        }
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        };
        handleAddTodo(newTodo);
        reset();
    };
    
    return (
        <>
            <h4>Add a new task</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='d-grid gap-2'>
                    <input
                        className='form-control'
                        type='text'
                        name='description'
                        placeholder='Type your task here'
                        autoComplete='off'
                        onChange={handleInputChange}
                        value={description}
                    />
                    <button
                        className={`btn btn-primary btn-block ${
                            description.trim().length < 1 && 'disabled'
                        }`}
                        type='submit'>
                        Add
                    </button>
                </div>
            </form>
        </>
    );
};
