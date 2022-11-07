

export const successReadingAllTodos = (state, todoList) => {
    
    return {
        ...state,
        todoList,
        readTodo: null,
        isSuccessReadingAllTodos: true,
        isSuccessReadingOneTodos: null,
        isSuccessfulInsertedTodos: null,
        isSuccessfulDeletedTodos: null,
        isSuccessfulUpdatedTodos: null,
        errorMessages: null,
    };
};

export const failReadingAllTodos = (state, errorMessages) => {
    
    return {
        ...state,
        todoList: null,
        readTodo: null,
        isSuccessReadingAllTodos: false,
        isSuccessReadingOneTodos: null,
        isSuccessfulInsertedTodos: null,
        isSuccessfulDeletedTodos: null,
        isSuccessfulUpdatedTodos: null,
        errorMessages,
    };
};



export const successReadingOneTodo = (state, task) => {
    
    return {
        ...state,
        todoList: null,
        readTodo: task,
        isSuccessReadingAllTodos: null,
        isSuccessReadingOneTodos: true,
        isSuccessfulInsertedTodos: null,
        isSuccessfulDeletedTodos: null,
        isSuccessfulUpdatedTodos: null,
        errorMessages: null,
    };
};

export const failReadingOneTodo = (state, errorMessages) => {
    
    return {
        ...state,
        todoList: null,
        readTodo: null,
        isSuccessReadingAllTodos: null,
        isSuccessReadingOneTodos: false,
        isSuccessfulInsertedTodos: null,
        isSuccessfulDeletedTodos: null,
        isSuccessfulUpdatedTodos: null,
        errorMessages,
    };
};



export const successInsertingOneTodo = (state, task) => {
    
    return {
        ...state,
        todoList: null,
        readTodo: task,
        isSuccessReadingAllTodos: null,
        isSuccessReadingOneTodos: null,
        isSuccessfulInsertedTodos: true,
        isSuccessfulDeletedTodos: null,
        isSuccessfulUpdatedTodos: null,
        errorMessages: null,
    };
};

export const failInsertingOneTodo = (state, errorMessages) => {
    
    return {
        ...state,
        todoList: null,
        readTodo: null,
        isSuccessReadingAllTodos: null,
        isSuccessReadingOneTodos: null,
        isSuccessfulInsertedTodos: false,
        isSuccessfulDeletedTodos: null,
        isSuccessfulUpdatedTodos: null,
        errorMessages,
    };
};



export const successDeletingOneTodo = (state, task) => {
    
    return {
        ...state,
        todoList: null,
        readTodo: null,
        isSuccessReadingAllTodos: null,
        isSuccessReadingOneTodos: null,
        isSuccessfulInsertedTodos: null,
        isSuccessfulDeletedTodos: true,
        isSuccessfulUpdatedTodos: null,
        errorMessages: null,
    };
};

export const failDeletingOneTodo = (state, errorMessages) => {
    
    return {
        ...state,
        todoList: null,
        isSuccessReadingAllTodos: null,
        isSuccessReadingOneTodos: null,
        isSuccessfulInsertedTodos: null,
        isSuccessfulDeletedTodos: false,
        isSuccessfulUpdatedTodos: null,
        errorMessages,
    };
};



export const successUpdatingOneTodo = (state, task) => {
    
    return {
        ...state,
        todoList: null,
        readTodo: task,
        isSuccessReadingAllTodos: null,
        isSuccessReadingOneTodos: null,
        isSuccessfulInsertedTodos: null,
        isSuccessfulDeletedTodos: null,
        isSuccessfulUpdatedTodos: true,
        errorMessages: null,
    };
};

export const failUpdatingOneTodo = (state, errorMessages) => {
    
    return {
        ...state,
        todoList: null,
        isSuccessReadingAllTodos: null,
        isSuccessReadingOneTodos: null,
        isSuccessfulInsertedTodos: null,
        isSuccessfulDeletedTodos: null,
        isSuccessfulUpdatedTodos: false,
        errorMessages,
    };
};