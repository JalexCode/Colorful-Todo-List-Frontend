import axios from 'axios';
import { deleteTODO, errorWhileDeleting, errorWhileInserting, errorReadingTODOS, errorReadingTODO, errorWhileUpdating, insertTODO, readTODOS, readTODO, updateTODO } from './todo.actions';

export const readTodos = () =>
    dispatch => {
        
        axios.get('http://127.0.0.1:8000/api/tasks/')
        .then((response) => {
            dispatch(readTODOS(response.data));
        })
        .catch((err) => {
            dispatch(errorReadingTODOS(err.data));
        });
};


export const readTodo = (taskId) =>
    dispatch => {
        
        axios.get(`http://127.0.0.1:8000/api/tasks/${taskId}/`)
        .then((response) => {
            dispatch(readTODO(response.data));
        })
        .catch((err) => {

            dispatch(errorReadingTODO(err.data));
        });
};

// REQUEST INSERTAR TODO
export const insertTodo = (task) =>
    dispatch => {
        
        axios.post(`http://127.0.0.1:8000/api/tasks/`, task)
        .then((response) => {
            
            dispatch(insertTODO(response.data));
        })
        .catch((err) => {
            dispatch(errorWhileInserting(err.data));
        });
};

// REQUEST MODIFICAR TODO
export const updateTodo = (task) =>
    dispatch => {
        
        axios.put(`http://127.0.0.1:8000/api/tasks/${task.id}/`, task)
        .then((response) => {
            
            dispatch(updateTODO(response.data));
        })
        .catch((err) => {

            dispatch(errorWhileUpdating(err.data));
        });
};

// REQUEST ELIMINAR TODO
export const deleteTodo = (task) =>
    dispatch => {
        
        axios.delete(`http://127.0.0.1:8000/api/tasks/${task.id}/`)
        .then((response) => {
            
            dispatch(deleteTODO(task.id));
        })
        .catch((err) => {

            dispatch(errorWhileDeleting(err.data));
        });
};

