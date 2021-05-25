import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';


function Task() {
    return (
        <div>
            <header>
                <h3>Welcome to task manager</h3>
            </header>            
            <TaskInput />
            <TaskList />
        </div>
    )
}

export default Task
