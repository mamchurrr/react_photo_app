const initialState = {
    photos: [],
    favorite: [],
}

export default function(state = initialState, action) {
    console.log('Gallery', action)
    switch (action.type) {
        case 'SET_PHOTOS':
            return {
                ...state,
                photos: [...action.photos]
            }               
        default:
            return state;
    }
}

