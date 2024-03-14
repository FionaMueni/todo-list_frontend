import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import {IconTrash, IconEdit} from "@tabler/icons-react";
import { useNavigate } from 'react-router-dom';

const Todo = () => {
const [todos, setTodos] = useState([]);
const [isEdit, setIsEdit] = useState(false);
const [isEditId, setIsEditId] = useState();
const [updatedTodo, setUpdatedTodo] = useState()
const navigate = useNavigate()

    const token = localStorage.getItem('token');

    useEffect(() =>{
        fetch("http://localhost:8000/todo", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function(response) {
            return response.json();
        }).then((info) => {
            if(info == "Token is invalid") {
                localStorage.clear();
                navigate("/")

            }
            console.log(info);
            setTodos(info.data)
        });
    }, [todos]);

    const deleteTodo = (id) => {
        fetch (`http://localhost:8000/todo/${id}`,{
            method: "DELETE",

        });
    };
    const changeTodoValue = ()=>{
        fetch(`http://localhost:8000/todo/${isEditId}`, {
            method: "PUT", 
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                newName: updatedTodo
                
            })
        }).then((res)=>res.json()).then((data)=>console.log(data));
    };
    return(
        <div>
            <Navbar/>
            {todos && todos.map((todo, index)=>{
                return (
                    <div key= {index} className='flex items-center gap-3 flex-col'>
                        <div className='flex'>
                        <h2>{todo.todo}</h2>
                        <IconEdit color="blue" className='cursor-pointer' onClick={()=>{
                            setIsEdit(!isEdit);
                            setIsEditId(todo._id)
                        }}/>
                        <IconTrash onClick={()=> deleteTodo(todo._id)} size={20} color="red" className='cursor-pointer'/>
                        </div>
                        <img src={todo.image}/>
                    </div>
                )
            })}

            {isEdit && 
            <form onSubmit={changeTodoValue}>
                <input type=""text onChange={(e)=>setUpdatedTodo(e.target.value)}
                className='border-2 rounded-md focus:border-blue-500 focus:outline-none py-1 px-3'/>
                <button type="submit" className='py-1 px-3 outline-none rounded-md bg-blue-500 border-none text-white'>Update</button>
            </form>
            }
        </div>
    )



   
        
    }


export default Todo;
