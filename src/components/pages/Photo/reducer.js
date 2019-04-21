const initialState = {
    title: '',
    src: '',
    description: '',
}

export default function(state = initialState, action) {
    console.log('Photo', action)
    return state;
}

