import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import '../../styles/todo-app.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    const handleRemoveTodo = (todoId) => {
        console.log(todoId + ' >> is removed!');
        const actionRemove = {
            type: 'remove',
            payload: todoId,
        };
        dispatch(actionRemove);
    };
    
    const handleCheckTodo = (todoId) => {
        console.log(todoId);
        const actionCheck = {
            type: 'check',
            payload: todoId,
        };
        dispatch(actionCheck);
    };
    
        const handleAddTodo = (newTodo) => {
            dispatch({
                type: 'add',
                payload: newTodo,
            });
        };
    
    return (
        <div>
            <h1>To-Do App</h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    {todos.length > 0 ? (
                        <TodoList
                            todos={todos}
                            handleCheckTodo={handleCheckTodo}
                            handleRemoveTodo={handleRemoveTodo}
                        />
                    ) : (
                        <p className='alert alert-info text-center'>
                            There are no tasks in the list.
                        </p>
                    )}
                </div>
                <div className='col-5 '>
                    <TodoAdd
                    handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    );
};
