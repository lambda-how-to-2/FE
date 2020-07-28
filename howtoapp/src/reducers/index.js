const initialState = {
    isEditing: false,
    list: [],
    cardToEdit: {}
}

export const HowToReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT_CARD":
            return {
                ...state,
                isEditing: true,
                cardToEdit: action.payload
            }
        case "GET_CARDS":
            return{
                ...state,
                list: action.payload
            }
        case "DELETE_CARD":
            return{
                ...state,
                list: state.list.filter(card => card.id !== action.payload)
            }
        case "ADD_CARD":
            return{
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }
        default:
            return state;
    }
}