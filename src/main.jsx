import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./../dist/output.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/registration/register.jsx'
import Todo from './pages/home/todo.jsx'
import AddTodo from './pages/home/AddTodo.jsx'
import ProtectedRoute from './pages/ProtectedRoute.jsx' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact="true" element={<App/>} />
      <Route path="/register" exact="true" element={<Register/>} />
      <Route path="/home" exact="true" element={
        <ProtectedRoute to ="/home" outlet={<Todo/>}/>
      } />
      <Route path="/home/create" exact="true" element={
        <ProtectedRoute to ="/home/create" outlet={<AddTodo/>}/>
      }  />


    </Routes>
    </BrowserRouter>

   
  </React.StrictMode>,
)
