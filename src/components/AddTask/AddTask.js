import React, { useState } from 'react';
import './AddTask.css';

function AddTask({ onAddTask }) {
    const [task, setTask] = useState('');

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task.trim() !== '') {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <div className="add-task">
            <input
                type="text"
                placeholder="Enter a new task"
                value={task}
                onChange={handleInputChange}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default AddTask;
