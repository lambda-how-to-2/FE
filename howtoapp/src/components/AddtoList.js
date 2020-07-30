import React, { useState } from 'react';
import './HowToList.css';

const AddToList = (props) => {

    const [formState, setFormState] = useState({
        title: '',
        author: '',
        description: ''
    })

    const changeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.addCard(formState);
        props.getList();
        setFormState({
            title: '',
            author: '',
            description: ''
        })
    }

    return(
        <form onSubmit={handleSubmit} className='addForm'>
            <p>Add Your Howto!</p>
            <label htmlFor='title'>Title: </label>
            <input type='text' name='title' value={formState.title} onChange={changeHandler} />
            <label htmlFor='author'>Author: </label>
            <input type='text' name='author' value={formState.author} onChange={changeHandler} />
            <label htmlFor='description'>Your Howto: </label>
            <textarea name='description' value={formState.description} onChange={changeHandler} />
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddToList;