import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {BsCheckCircle} from 'react-icons/bs'

export default function(props) {
    const { todo, removeTodo, completeTodo } = props
    return (
        <div className={todo.completed ? 'todo-row completed' : 'todo-row'}>
        {todo.text}
        <div className='iconsContainer'>
            <RiCloseCircleLine className='icon' onClick={() => removeTodo(todo.id)}/>
            <BsCheckCircle className='icon' onClick={() => completeTodo(todo.id)}/>
        </div>    
    </div>
  )
}
