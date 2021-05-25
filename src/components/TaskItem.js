import React from 'react';
import {BiCheck} from 'react-icons/bi';
import {FaTrashAlt} from 'react-icons/fa';
import {connect} from 'react-redux';
import {completedCheckHandle,deleteHandle} from '../redux/actionCreators'

function TaskItem(props) {
    const {task, completedCheckHandle, deleteHandle} = props;
    return (
        <div className='task'>
            <li className={`task-item ${task.completed ? 'completed' : ''}`}>
                {task.text}
            </li>
            <button className='complete-btn' onClick={() => completedCheckHandle(task.id)}>
                <BiCheck color='white' size='2rem'/>
            </button>
            <button className='trash-btn' onClick={() => deleteHandle(task.id)}>
                <FaTrashAlt color='white' size='2rem'/>
            </button>
        </div>
    )
}
const mapDispatchToProps = (dispatch) =>{
    return {
        completedCheckHandle : (id) => dispatch(completedCheckHandle(id)),
        deleteHandle : (id) => dispatch(deleteHandle(id)),
    }
}
export default connect(null, mapDispatchToProps)(TaskItem)
