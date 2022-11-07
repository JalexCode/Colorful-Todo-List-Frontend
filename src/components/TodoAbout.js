import { React } from "react";
import SlideAnimation from '../util/animation'
import { Task } from "@mui/icons-material";
import { Button } from "@mui/material";
import { HOME, } from "../util/routes"
import { useNavigate } from "react-router-dom";

export const TodoAbout = (props) =>  {

  const navigate = useNavigate();

  return (
    <div className='todo-app'>
        <h1>Acerca de</h1>
        <div>
          <SlideAnimation target={<Task className="App-logo" sx={{height:'250px', width:'250px', color:'white'}}></Task>}></SlideAnimation>
        </div>
        <p style={{color:'white', fontSize:"24px"}}>
          Colorful Todo List v1.0
        </p>
        <p style={{color:'white', fontSize:"20px"}}>
          Desarrollador: Javier Alejandro González Casellas
        </p>
        <a
          className="link"
          href='https://gitlab.reduc.edu.cu/javier.gggonzalez'
          target='_blank'
          rel='noopener noreferrer'
        >
          Mi GitLab
        </a>
        <div style={{marginTop:'20px'}}>
            <Button variant="contained"
            sx={{marginLeft: '2em'}}
            onClick={() => navigate(`${HOME}`)}>
                Regresar
            </Button>
        </div>
    </div>
  );
}

export default TodoAbout;