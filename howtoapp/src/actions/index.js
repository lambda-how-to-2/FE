import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

export const getList = () => dispatch => {
    axiosWithAuth().get('/howtodos')
    .then(response => {
        console.log(response)
        dispatch({ type: "GET_CARDS", payload: response.data })
    })
    .catch(error => console.log(error))
}

export const deleteCard = (cardID) => dispatch => {
    axiosWithAuth().delete(`/howtodos/${cardID}`)
    .then(response => {
        console.log(response)
        dispatch({ type: "DELETE_CARD", payload: cardID })
    })
    .catch(error => console.log(error))
}

export const addCard = (newCard) => dispatch => {
    axiosWithAuth().post('/howtodos', newCard)
    .then(response => {
        console.log(response);
        dispatch({ type: "ADD_CARD", payload: newCard })
    })
    .catch(error => console.log(error))
}

export const editCard = (cardId) => dispatch => {
    dispatch({ type: "EDIT_CARD", payload: cardId});
    console.log(cardId);
}