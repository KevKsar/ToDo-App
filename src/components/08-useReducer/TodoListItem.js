import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({
    todo,
    index,
    handleCheckTodo,
    handleRemoveTodo,
}) => {
    return (
        <li className='todoItem list-group-item list-group-item-action animate__animated animate__fadeIn'>
            <span className={`todoDesc ${todo.done && 'completed'}`}>
                {index + 1}- {todo.description}
            </span>
            <div className='listControls'>
                <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={() => handleCheckTodo(todo.id)}
                />
                <button type="button" class="btn-close" onClick={() => handleRemoveTodo(todo.id)}></button>
            </div>
        </li>
    );
};

TodoListItem.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number.isRequired,
    handleCheckTodo: PropTypes.func,
    handleRemoveTodo: PropTypes.func,
};
