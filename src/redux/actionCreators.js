import {INPUT_VALUE_CHANGE,
        FORM_SUBMIT,
        COMPLETED_CHECK,
        DELETE_HANDLE,
        FILTER_VALUE_CHANGE_HANDLE,
        FILTER_FUNC,
        SET_TASK_ARR} from './actionType';


    const inputChangeHandle = (e) =>{
        return {
            type : INPUT_VALUE_CHANGE,
            payload : e.target.value
        }
    }


    const filterValueChangeHandle = (e) =>{
        return {
            type : FILTER_VALUE_CHANGE_HANDLE,
            payload : e.target.value
        }
    }


    const formSubmitHandle = () =>{
        return {
            type : FORM_SUBMIT
        }
    }


    const completedCheckHandle = (id) =>{
        return {
            type : COMPLETED_CHECK,
            payload : id
        }
    }


    const deleteHandle = (id) =>{
        return {
            type : DELETE_HANDLE,
            payload : id
        }
    }
    const filterFuncHandle = () =>{
        return {
            type : FILTER_FUNC,
        }
    }

    const setTaskArr = (local) =>{
        return {
            type : SET_TASK_ARR,
            payload : local
        }
    }


export {inputChangeHandle,filterValueChangeHandle, filterFuncHandle, setTaskArr, formSubmitHandle, completedCheckHandle, deleteHandle}