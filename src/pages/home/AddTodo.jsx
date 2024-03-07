import React, {useState} from 'react';
import Navbar from '../../components/navbar/navbar';
import {useNavigate} from 'react-router-dom'

const AddTodo = () => {
    const [todo, setTodo] = useState("");
    const navigate = useNavigate()
    const submitForm = (event) =>{
        event.preventDefault()
        fetch("http://localhost:8000/todo", {
            method: "POST",
            headers: {
                Accept : "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                todo,
            })
        }).then((response)=>response.json()).then((data)=>{
            if(data.message === "Todo created successfully") {
                navigate("/home");

            }
        })
        
    };
    return (
        <div>
            <Navbar/>
            <form onSubmit={submitForm}>
                <input type="text" className='border-2 rounded-md focus:border-blue-500 focus:outline-none py-1 px-3' onChange={(event)=>setTodo(event.target.value)}/>
                <button type="submit" className='py-1 px-3 outline-none rounded-md bg-blue-500 border-none text-white'>Create Todo</button>
            </form>
        </div>
    );
}

export default AddTodo;
