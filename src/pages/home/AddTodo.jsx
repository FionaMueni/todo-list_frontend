import React, {useState} from 'react';
import Navbar from '../../components/navbar/navbar';
import {useNavigate} from 'react-router-dom'

const AddTodo = () => {

    const token = localStorage.getItem('token');

    const [todo, setTodo] = useState("");
    const [file, setFile] = useState()



    const navigate = useNavigate()
    const submitForm = (event) =>{
        event.preventDefault();
        const formData = new FormData()
        formData.append("todo",todo)
        formData.append("image", file)




        fetch("http://localhost:8000/todo", {
            method: "POST",
            headers: {
                // Accept : "application/json",
                // "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
                
            },
            body: formData
            
           
        }).then((response)=>response.json()).then((data)=>{
            if(data.message === "Todo created successfully") {
                navigate("/home");

                if(data == "Token is invalid") {
                    localStorage.clear();
                    navigate("/")
    
                }

            }
            console.log(data);
        })
        
    };
    return (
        <div>
            <Navbar/>
            <form onSubmit={submitForm}>
                <input type="text" className='border-2 rounded-md focus:border-blue-500 focus:outline-none py-1 px-3' onChange={(event)=>setTodo(event.target.value)}/>
                <input type="file" className='border-2 rounded-md focus:border-blue-500 focus:outline-none py-1 px-3' onChange={(event)=>setFile(event.target.files[0])}/>
                <button type="submit" className='py-1 px-3 outline-none rounded-md bg-blue-500 border-none text-white'>Create Todo</button>
            </form>
        </div>
    );
}

export default AddTodo;
