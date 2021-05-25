import { v4 as uuidv4 } from 'uuid'
import {INPUT_VALUE_CHANGE,
        FORM_SUBMIT,
        COMPLETED_CHECK,
        DELETE_HANDLE,
        FILTER_VALUE_CHANGE_HANDLE,
        FILTER_FUNC,
        SET_TASK_ARR} from './actionType';



const initialState = {
    inputValue : '',
    taskArr : [],
    filterValue : 'all',
    filteredArr : []
}

const reducer = (state = initialState, action) =>{
    const {type, payload} = action


    if(type === INPUT_VALUE_CHANGE){
        return {...state, inputValue : payload}
    }


    if(type === FILTER_VALUE_CHANGE_HANDLE){
        return {...state, filterValue : payload}
    }

    if(type === FORM_SUBMIT){
        return {...state, taskArr : [...state.taskArr, {id : uuidv4(), text : state.inputValue, completed : false}], inputValue : '' }
    }

    if(type === COMPLETED_CHECK){
        const tempTaskArr = state.taskArr.map(task =>{
            if(task.id === payload){
                return {...task, completed : !task.completed}
            }
            return task;
        })
        return {...state, taskArr : [...tempTaskArr]}
    }


    if(type === DELETE_HANDLE){
        const tempTaskArr = state.taskArr.filter(task => task.id !== payload);
        return {...state, taskArr : [...tempTaskArr]}
    }


    if(type === FILTER_FUNC){

        switch(state.filterValue){
            case 'completed' : 
                const tempTask = state.taskArr.filter(task => task.completed === true)
                return {...state, filteredArr : [...tempTask]}
            

            case 'uncompleted' : 
                const temp = state.taskArr.filter(task => task.completed === false)
                return {...state, filteredArr : [...temp]}
            
            default : return {...state, filteredArr : [...state.taskArr]}
        }
    }

    if(type === SET_TASK_ARR){
        return{
            ...state,
            taskArr : [...payload]
        }
    }
    return state;
}

export default reducer;