import { createSelector } from "reselect";

// state -> Estado general
// todo -> La parte que me interesa
const selectTodo = (state) => state.todo;

// selectTodoState contedra los estados seleccionados de la nube de estados
// retornara dicho estado, de manera general->todoState = {"todo":{}}
export const selectTodoState = createSelector(
  [selectTodo],
  (todoState) => todoState
);