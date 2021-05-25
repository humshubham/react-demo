import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import { inputChangeHandle, formSubmitHandle, filterValueChangeHandle, filterFuncHandle, setTaskArr} from '../redux/actionCreators';

function TaskInput(props) {
    const {inputValue,
        filterValue,
        taskArr,
        filterValueChangeHandle,
        inputChangeHandle,
        formSubmitHandle,
        filterFuncHandle,
        setTaskArr} = props;

        const saveLocalTasks = () =>{
            localStorage.setItem("tasks", JSON.stringify(taskArr));
        };
        

        useEffect(() => {
            const getLocalTasks = () =>{
                if(localStorage.getItem('tasks') === null){
                    localStorage.setItem('tasks', JSON.stringify([]));
                } else{
                    const local = JSON.parse(localStorage.getItem('tasks'));
                    setTaskArr(local);
                }
            };
            getLocalTasks();            
        }, [])

        useEffect(() => {
            filterFuncHandle();
            saveLocalTasks();
        }, [filterFuncHandle,filterValue, taskArr])

    return (
        <>
        <form onSubmit={(e) => {e.preventDefault(); return formSubmitHandle()}}>
            <input type="text" required value={inputValue} onChange={inputChangeHandle}  className="task-input" />
            <button className="task-button" type="submit">
                Add
            </button>
        
        <div className="select">
            <select name="tasks" value={filterValue}  onChange={filterValueChangeHandle}className="filter-task">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Incomplete</option>
            </select>
        </div>
        </form>

        </>
    )
}

const mapStateToProps = (state) =>{
    return{
        inputValue : state.inputValue,
        filterValue : state.filterValue,
        taskArr : state.taskArr
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        inputChangeHandle : (e) => dispatch(inputChangeHandle(e)),
        filterValueChangeHandle : (e) => dispatch(filterValueChangeHandle(e)),
        formSubmitHandle : () => dispatch(formSubmitHandle()),
        filterFuncHandle : () => dispatch(filterFuncHandle()),
        setTaskArr : (local) => dispatch(setTaskArr(local))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskInput);
