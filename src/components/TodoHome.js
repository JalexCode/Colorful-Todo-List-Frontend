import { React } from "react";
import Todo from './Todo';
import { connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectTodoState} from '../redux/todo.selectors'
import { readTodos} from '../redux/thunk'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { EDIT, ABOUT } from "../util/routes";

export const TodoListComponent = (props) =>  {
  var todoList;
    
    if (props.state.isSuccessReadingAllTodos === null){
        todoList = [];
        props.readTodos();
    }else{
        todoList = props.state.todoList;
    }

    const navigate = useNavigate();

  return (
    <div>
      <div className='todo-app'>
          {props.state.isSuccessReadingAllTodos === true ?
          <h1>Esto es lo que tienes que hacer</h1>:
          <h2 style={{color:'red'}}>Parece que algo ha salido mal :-(</h2>
          }
          <div className="header">
          {props.state.isSuccessReadingAllTodos === true ?
            <Button onClick={() => navigate(`${EDIT}`)}>Agregar nota</Button>
            :
            <div></div>
          }
            <Button onClick={() => navigate(`${ABOUT}`)}>Acerca de</Button>
          </div>
          {props.state.isSuccessReadingAllTodos === true ?
            todoList.map((currentTodo) => (
              <Todo todo={currentTodo}/>
            )):
            <h2 style={{color:'red', marginTop:'50px'}}>Error 404</h2>
          }
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  readTodos: () =>
      dispatch(readTodos()),
});

const mapStateToProps = createStructuredSelector({
  state: selectTodoState,
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);