import { connect } from "react-redux";
import { insertTodo, readTodo, updateTodo } from "../redux/thunk";
import { selectTodoState } from '../redux/todo.selectors';
import { Formik } from 'formik';
import { createStructuredSelector } from 'reselect';
import { TextField, Button} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { todoValidationSchema } from "../util/validation"
import { HOME, } from "../util/routes"
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

const TodoInsertPage = (props) => {

    const {taskId} = useParams();
    const navigate = useNavigate();
    

    var todoItem = props.state.readTodo;
    var isUpdateAction = false;
    taskId === null || taskId === undefined ?
    isUpdateAction = false:
    isUpdateAction = true
    
    // si es actualizacion
    if(taskId !== undefined && todoItem === null && props.state.isSuccessReadingOneTodos === null){
        props.readTodoById(taskId);
    }

    // si es insercion
    if(todoItem === null){
        todoItem = {
            text: '',
            details: '',
            priority: 1,
            isCompleted: false,
        };
    }
    

    var initialValues = {
        text: todoItem.text,
        details: todoItem.details,
        priority: todoItem.priority,
        isCompleted: todoItem.isCompleted,
    };

    // snackbar
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

    return (
        <div>
            <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={todoValidationSchema}>
                { formik => (
                    <div className='insert-todo'>
                        {props.state.isSuccessReadingOneTodos === false ?
                        <h1 style={{margin: '32px 0', color: 'red', fontSize: '24px'}}>Ups, parece que ha ocurrido un error</h1>
                        :
                        <h1 style={{margin: '32px 0', color: '#555', fontSize: '24px'}}>¿Qué planes tienes para hoy?</h1>}
                        <form>
                            <div className="todo-insert-container">
                                <div className="input">
                                    <TextField id="text" name="text" label="Título" variant="standard"
                                        value={formik.values.text}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}/>
                                    {formik.touched.text && formik.errors.text ? (
                                        <div style={{fontSize:'12px', color:'red'}}>{formik.errors.text}</div>
                                    ) : null}
                                </div>

                                <div className="input">
                                    <TextField
                                        sx={{color: 'white'}}
                                        id="details"
                                        name="details"
                                        label="Detalles"
                                        variant="standard"
                                        value={formik.values.details}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        maxRows={10}
                                        minRows={20}
                                        multiline
                                        fullWidth
                                        />
                                    {formik.touched.details && formik.errors.details ? (
                                        <div style={{fontSize:'12px', color:'red'}}>{formik.errors.details}</div>
                                    ) : null}
                                </div>

                                <div className="input">
                                    <TextField
                                        sx={{color: 'white'}}
                                        id="priority"
                                        name="priority"
                                        label="Prioridad"
                                        variant="standard"
                                        value={formik.values.priority}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        />
                                    {formik.touched.priority && formik.errors.priority ? (
                                        <div style={{fontSize:'12px', color:'red'}}>{formik.errors.priority}</div>
                                    ) : null}
                                </div>
                            </div>
                            
                            <div>
                                <Button variant="contained"
                                onClick={() => {
                                    if(formik.isValid){
                                        isUpdateAction === false ?
                                        props.insertTodo({
                                            text: formik.values.text,
                                            details: formik.values.details,
                                            priority: formik.values.priority,
                                            isCompleted: false,
                                        }):
                                        props.updateTodo({
                                            id: todoItem.id,
                                            text: formik.values.text,
                                            details: formik.values.details,
                                            priority: formik.values.priority,
                                            isCompleted: todoItem.isCompleted,
                                        });
                                        props.state.isSuccessfulInsertedTodos === false && isUpdateAction === false || props.state.isSuccessfulUpdatedTodos === false && isUpdateAction === true?
                                            setMessage("Ha ocurrido un error"):
                                            setMessage("Operación completada exitosamente")
                                        
                                        handleClick()
                                    }
                                }}
                                sx={{backgroundColor: 'green'}}>
                                    Guardar
                                </Button>

                                <Button variant="contained"
                                sx={{marginLeft: '2em'}}
                                onClick={() => navigate(`${HOME}`)}>
                                    Regresar
                                </Button>
                            </div>
                            <Snackbar
                                open={open}
                                autoHideDuration={6000}
                                onClose={handleClose}
                                message={message}
                                action={action}
                            />
                        </form>
                    </div>                
                )
                }
            </Formik>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    insertTodo: (todo) =>
        dispatch(insertTodo(todo)),

    readTodoById: (taskId) =>
    dispatch(readTodo(taskId)),

    updateTodo: (task) =>
        dispatch(updateTodo(task))
    
});


const mapStateToProps = createStructuredSelector({
    state: selectTodoState,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInsertPage);