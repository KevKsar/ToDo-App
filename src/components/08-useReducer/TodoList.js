import React from 'react';
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleCheckTodo, handleRemoveTodo }) => {
    return (
        <ul className='todoList list-group list-group-flush'>
            {todos.map((todo, i) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    index={i}
                    handleCheckTodo={handleCheckTodo}
                    handleRemoveTodo={handleRemoveTodo}
                />
            ))}
        </ul>
    );
};

TodoListItem.propTypes = {
    todos: PropTypes.array,
    handleCheckTodo: PropTypes.func,
    handleRemoveTodo: PropTypes.func,
};
