import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import {IconTrash} from "@tabler/icons-react";

const Todo = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:8000/todo").then(function(response) {
            return response.json();
        }).then((info) => setTodos(info.data));
    }, [todos]);

    const deleteTodo = (id) => {
        fetch (`http://localhost:8000/todo/${id}`,{
            method: "DELETE",

        });
    }
    return(
        <div>
            <Navbar/>
            {todos && todos.map((todo, index)=>{
                return (
                    <div key= {index} className='flex items-center gap-3'>
                        <h2>{todo.todo}</h2>
                        <IconTrash onClick={()=> deleteTodo(todo._id)} size={20} color="red" className='cursor-pointer'/>
                    </div>
                )
            })}
        </div>
    )



   
        
    }


export default Todo;
