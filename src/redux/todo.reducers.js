import TODO_ACTION_TYPES from "./todo.action-types";
import { failDeletingOneTodo, failInsertingOneTodo, failReadingAllTodos, failReadingOneTodo, failUpdatingOneTodo, successDeletingOneTodo, successInsertingOneTodo, successReadingAllTodos, successReadingOneTodo, successUpdatingOneTodo } from "./utils-for-reducer";


const INITIAL_STATE = {
    todoList: null,
    readTodo: null,
    isSuccessReadingAllTodos: null,
    isSuccessReadingOneTodos: null,
    isSuccessfulInsertedTodos: null,
    isSuccessfulDeletedTodos: null,
    isSuccessfulUpdatedTodos: null,
    errorMessages: null,
};


export const todoReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){

        case TODO_ACTION_TYPES.READ_ALL_TODOS:
            return successReadingAllTodos(state, action.payload);
        
        case TODO_ACTION_TYPES.READ_ALL_TODOS_ERROR:
            return failReadingAllTodos(state, action.payload);


        case TODO_ACTION_TYPES.READ_ONE_TODO:
            return successReadingOneTodo(state, action.payload);
        
        case TODO_ACTION_TYPES.READ_ONE_TODO_ERROR:
            return failReadingOneTodo(state, action.payload);


        case TODO_ACTION_TYPES.INSERT_TODO:
            return successInsertingOneTodo(state, action.payload);
        
        case TODO_ACTION_TYPES.INSERT_TODO_ERROR:
            return failInsertingOneTodo(state, action.payload);


        case TODO_ACTION_TYPES.DELETE_TODO:
            return successDeletingOneTodo(state, action.payload);
        
        case TODO_ACTION_TYPES.DELETE_TODO_ERROR:
            return failDeletingOneTodo(state, action.payload);


        case TODO_ACTION_TYPES.UPDATE_TODO:
            return successUpdatingOneTodo(state, action.payload);
        
        case TODO_ACTION_TYPES.UPDATE_TODO_ERROR:
            return failUpdatingOneTodo(state, action.payload);
    }

    return state;
};