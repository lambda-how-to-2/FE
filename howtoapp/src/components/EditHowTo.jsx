import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import './EditHowTo.css'
const EditHowTo = () => {
  const [loading, setLoading] = useState(true)
  const [howToDo, setHowToDo] = useState({
    id: null,
    title: '',
    author: '',
    description: '',
    image_url: '',
  })
  useEffect(() => {
    const currId = window.location.href.split('/')[3]
    axiosWithAuth().get(`howtodos/${currId}`)
    .then(({ data }) => {
      console.log("data: ", data);
      setHowToDo({ ...data})
      setLoading(false)
    })
    .catch(err => setLoading(false))
  }, [loading])
  const handleSubmit = e => {
    e.preventDefault()
    console.log("currHowTo: ", howToDo);
    axiosWithAuth().put(`howtodos/${howToDo.id}`, { ...howToDo })
    .then(res => {
      window.location.replace(`/howtos`);
    })
    .catch(err => {})
  }
  return (
    <div className='edit-form-container'>
      <form onSubmit={handleSubmit} className='edit-form'>
        <div>Title</div>
        <input onChange={e => setHowToDo({ ...howToDo, title: e.target.value})} className='edit-input' value={howToDo.title} />
        <div className='mtop'>Author</div>
        <input onChange={e => setHowToDo({ ...howToDo, author: e.target.value})} className='edit-input' value={howToDo.author} />
        <div className='mtop'>Image Url</div>
        <input onChange={e => setHowToDo({ ...howToDo, image_url: e.target.value})} className='edit-input' value={howToDo.image_url} />
        <div className='mtop'>Description</div>
        <textarea onChange={e => setHowToDo({ ...howToDo, description: e.target.value})} className='edit-textarea' value={howToDo.description} />
        <button className='mtop edit-btn' type='submit'>Edit HowTo</button>
      </form>
    </div>
  )
}
export default EditHowTo;
