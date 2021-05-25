import React from 'react'
import Taskitem from './TaskItem';
import {connect} from 'react-redux';

function Tasklist(props) {
    const {filteredArr} = props;
    return (
        <div className="task-container">
            <ul className="task-list">
                {
                    filteredArr.map(task => <Taskitem key={task.id} task={task}/>)
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        taskArr : state.taskArr,
        filteredArr :state.filteredArr
    }
}

export default connect(mapStateToProps)(Tasklist)
