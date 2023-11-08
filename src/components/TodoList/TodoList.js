import React from 'react';
import './todo-list.css';

function TodoList({ todos, onToggleTask, onDeleteTask }) {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <li key={index} className={todo.completed ? 'completed' : ''}>
                    <span onClick={() => onToggleTask(index)}>{todo.text}</span>
                    <button className="delete-button" onClick={() => onDeleteTask(index)}>-</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
