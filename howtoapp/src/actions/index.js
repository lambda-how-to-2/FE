import { axiosWithAuth } from '../utils/axiosWithAuth';

export const getList = () => dispatch => {
    axiosWithAuth().get('/howtodos')
    .then(response => {
        console.log(response)
        dispatch({ type: "GET_LIST", payload: response.data })
    })
    .catch(error => console.log(error))
}