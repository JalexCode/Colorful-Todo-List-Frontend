import TODO_ACTION_TYPES from "./todo.action-types";

// LEER TODOS ACTION
export const readTODOS = (todoList) => ({
    type: TODO_ACTION_TYPES.READ_ALL_TODOS,
    payload: todoList,
});

export const errorReadingTODOS = (errorMessages) => ({
    type: TODO_ACTION_TYPES.READ_ALL_TODOS_ERROR,
    payload: errorMessages,
});

// LEER UNO ACTION
export const readTODO = (task) => ({
    type: TODO_ACTION_TYPES.READ_ONE_TODO,
    payload: task,
});

export const errorReadingTODO = (errorMessages) => ({
    type: TODO_ACTION_TYPES.READ_ONE_TODO_ERROR,
    payload: errorMessages,
});

// INSERTAR ACTION
export const insertTODO = (task) => ({
    type: TODO_ACTION_TYPES.INSERT_TODO,
    payload: task,
});


export const errorWhileInserting = (errorMessages) => ({
    type: TODO_ACTION_TYPES.INSERT_TODO_ERROR,
    payload: errorMessages,
});

// ELIMINAR ACTION
export const deleteTODO = (task) => ({
    type: TODO_ACTION_TYPES.DELETE_TODO,
    payload: task,
});

export const errorWhileDeleting = (errorMessages) => ({
    type: TODO_ACTION_TYPES.DELETE_TODO_ERROR,
    payload: errorMessages,
});

// MODIFICAR ACTION
export const updateTODO = (task) => ({
    type: TODO_ACTION_TYPES.UPDATE_TODO,
    payload: task,
});

export const errorWhileUpdating = (errorMessages) => ({
    type: TODO_ACTION_TYPES.UPDATE_TODO_ERROR,
    payload: errorMessages
});