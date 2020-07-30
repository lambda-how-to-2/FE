import React, { useEffect, useState } from 'react';
import HowToCard from './HowToCard';
import { connect } from 'react-redux';
import { getList, addCard, deleteCard, editCard, updateCard } from '../actions/index';
import './HowToList.css';
import AddToList from './AddtoList';

const HowToList = ({ getList, list, isEditing, deleteCard, addCard, editCard, cardToEdit, updateCard }) => {

    const [editState, setEditState] = useState({
        title: '',
        author: '',
        description: ''
    })

    useEffect(() => {
        getList();
    }, [])

    useEffect(() => {
        setEditState(cardToEdit)
    }, [isEditing])


    const changeHandler = event => {
        setEditState({
            ...editState,
            [event.target.name]: event.target.value
        })
        console.log(editState);
    }

    const submitHandler = event => {
        event.preventDefault();
        updateCard(editState);
        getList();
    }

    return(
        <div>
            <AddToList addCard={addCard} getList={getList} />
            {list.map(howto => (
                <div key={howto.id}>
                    <HowToCard HowTo={howto} deleteCard={deleteCard} editCard={editCard} />
                </div>
            ))}
             
             {isEditing && (
                        <form onSubmit={submitHandler}>
                            Edit
                            <label htmlFor='title'>Title: </label>
                            <input type='text' name='title' value={editState.title} onChange={changeHandler}/>
                            <label htmlFor='author'>Author: </label>
                            <input type='text' name='author' value={editState.author} onChange={changeHandler}/>
                            <label htmlFor='description'>HowTo</label>
                            <textarea name='description' value={editState.description} onChange={changeHandler}/>
                            <button type='submit'>Update</button>
                        </form>
            )}
            <button onClick={() => console.log(cardToEdit)}>Test</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.list,
        isEditing: state.isEditing,
        cardToEdit: state.cardToEdit
    }
}

const mapDispatchToProps = { getList, addCard, deleteCard, editCard, updateCard }
// deleteCard

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HowToList);