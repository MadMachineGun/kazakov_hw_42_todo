import React, { useState } from 'react';
import './todo-list.css';

export default function TodoList({ todos, onToggleTask, onDeleteTask }) {
    const [selectAll, setSelectAll] = useState(false);

    const handleToggleAll = () => {
        setSelectAll(!selectAll);
        todos.forEach((todo, index) => onToggleTask(index, !selectAll));
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={selectAll}
                onChange={handleToggleAll}
            />
            <label>Toggle All</label>

            <ul className='todo-list'>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        onClick={() => onToggleTask(index)}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggleTask(index)}
                        />

                        <span
                            className={todo.completed ? 'completed' : ''}
                            style={{ marginRight: '5px' }}
                        >
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
        </div>
    );
}
