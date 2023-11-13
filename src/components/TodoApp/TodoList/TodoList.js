import React from 'react';
import './todo-list.css';

export default function TodoList({todos, onToggleTask, onDeleteTask}) {
    return (
        <ul className='todo-list'>
            {todos.map((todo, index) => (
                <li
                    key={index}
                    onClick={() => onToggleTask(index)}
                >
                    <span
                        className={todo.completed ? 'completed' : ''}
                        style={{marginRight: '5px'}}>
                        {todo.text}
                    </span>
                    <button
                        className='delete-button'
                        onClick={(event) => {
                            event.stopPropagation();
                            onDeleteTask(index);
                        }}
                        >
                        -
                    </button>
                </li>
            ))}
        </ul>
    );
}


