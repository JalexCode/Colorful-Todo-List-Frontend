import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import React, { useState } from 'react';
import { updateTodo, deleteTodo } from "../redux/thunk";
import { selectTodoState } from '../redux/todo.selectors';
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {EDIT} from "../util/routes"


export const Todo = (props) => {  
  const navigate = useNavigate()
  const toEditTask = (id) => {
    navigate(`${EDIT}/${id}`)
  };
  const completeTodo = (todo) => {
    var changedTodo = todo;
    if (todo.isCompleted){
      todo.isCompleted = false;
    }else{
      todo.isCompleted = true;
    }
    props.updateTodo(changedTodo)
  };

  return (
    
    <div
      className={props.todo.isCompleted ? 'todo-row complete' : 'todo-row'}
      key={props.todo.id}
    >

      <div className='priority'> 
        {props.todo.priority}
      </div>
      <div key={props.todo.id - 1} onClick={() => completeTodo(props.todo)}> 
        {props.todo.text}
      </div>
      <div className='icons'>
        <AiFillCloseCircle
          onClick={() => props.deleteTodo(props.todo)}
          className='delete-icon'
        />
        <AiFillEdit
          onClick={() => toEditTask(props.todo.id)}
          className='edit-icon'
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: (todo) =>
      dispatch(deleteTodo(todo)),
  updateTodo: (task) =>
      dispatch(updateTodo(task)),
});

const mapStateToProps = createStructuredSelector({
  state: selectTodoState,
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);