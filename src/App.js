import React from 'react';
import './App.css';
import TodoHome from './components/TodoHome';
import TodoInsertPage from './components/TodoInsert';
import {HOME, EDIT, ABOUT} from './util/routes';
import { Route, Routes} from "react-router";
import TodoAbout from './components/TodoAbout';

function App() {
  return (
    <Routes>
      <Route path={`${HOME}`} element={<TodoHome />} />
      <Route path={`${EDIT}/`} element={<TodoInsertPage/>}/>
      <Route path={`${EDIT}/:taskId`} element={<TodoInsertPage/>}/>
      <Route path={`${ABOUT}/`} element={<TodoAbout/>}/>
    </Routes>    
  );
}

export default App;