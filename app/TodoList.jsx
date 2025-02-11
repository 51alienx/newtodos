"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const TodoList = () => {
  const [todos,SetTodos]=useState([]);
  const [input, SetInput]=useState("");

  const addon =(e)=>{
    e.preventDefault()
    SetTodos([...todos,{
        id:Date.now(),
        text:input,
        completed:false,
    }])
    SetInput('')

  }

  return (
    <div className='ml-auto mr-auto pr-[15px] pl-[15px] w-100% justify-center text-center'>
        <h2 className='text-3xl text-purple-500'> Todo List</h2>
        <div>
            <form onSubmit={addon}>
               <input type="text" 
                value={input}
                onChange={(e)=>SetInput(e.target.value)}
                placeholder='Add a new task '
               />
            </form>
           
        </div>
        <div>{todos.map(todo=>(
                <div>{todo.text}</div>
      ))}</div>
    </div>
             
  );
};

export default TodoList;