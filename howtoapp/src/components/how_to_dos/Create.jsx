import React, { useState } from 'react'
import './Create.scss'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import axios from 'axios'
const Create = () => {
  const [howToDo, setHowToDo] = useState({
    title: '',
    author: '',
    description: '',
  })

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('http://localhost:3300/api/howtodos', {...howToDo})
    .then(res => {
      console.log("res: ", res);
    })
    .catch(e => 'e')
  }

  return (
    <div className='create-container'>
      <form onSubmit={handleSubmit} className='create-inner-container'>
        <div>Title</div>
        <input placeholer='Title' className='create-input' value={howToDo.title} onChange={e => setHowToDo({...howToDo, title: e.target.value})} />
        <div style={{marginTop: '1rem'}}>Author</div>
        <input placeholer='Author' className='create-input' value={howToDo.author} onChange={e => setHowToDo({...howToDo, author: e.target.value})} />
        <div style={{marginTop: '1rem'}}>Description</div>
        <input placeholer='Description'  className='create-input' value={howToDo.description} onChange={e => setHowToDo({...howToDo, description: e.target.value})} />
        <button type='submit'>Create Todo</button>
      </form>
    </div>
  )
}

export default Create;