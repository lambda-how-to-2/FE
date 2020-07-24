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
        case "RETURN_CARD":
            return {
                ...state,
                isEditing: false,
                list: [
                    ...state.list,
                    
                ]
            }
        default:
            return state;
    }
}