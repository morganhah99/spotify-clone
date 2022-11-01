export const initialState = { //empty datalayer slice and is the inital state
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
};

const reducer = (state, action)  => {  //state is how the website currently looks, action is things like setItem 
   console.log(action);             // action has a type, and payload
   switch(action.type) {    // in this case, the type of action is "SET_USER" which returns the new state and updates value for user
    case 'SET_USER':
        return {
            ...state, 
            user: action.user
        }
    case 'SET_TOKEN':
        return {
            ...state, 
            token: action.token
        }
    default:
        return state;
   }
}

export default reducer;