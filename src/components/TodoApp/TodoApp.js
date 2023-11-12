import React, { useState } from 'react';
import TodoList from './TodoList/TodoList';
import AddTask from './AddTask/AddTask';
import './todo-app.css';

const initialTasks = [
    { text: 'Breakfast', completed: false },
    { text: 'Work', completed: false },
    { text: 'Lunch', completed: false },
    { text: 'Work', completed: false },
    { text: 'Dinner', completed: false },
];

export default function TodoApp() {

    const [todos, setTodos] = useState(initialTasks);

    const addTask = (task) => {
        setTodos([...todos, { text: task, completed: false }]);
    };

    const toggleTask = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    const deleteTask = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    return (
        <div className='app-container'>
            <h1>Todo List</h1>
            <AddTask onAddTask={addTask} />
            <TodoList todos={todos} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
        </div>
    );
}


