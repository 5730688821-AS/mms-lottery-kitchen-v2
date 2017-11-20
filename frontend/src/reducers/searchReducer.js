const urlSearch= 'http://localhost:3030/query?tags=';

const initState = {
    value: '',
    search: [],
    url: urlSearch,
    data: {},
};

export function searchReducer(state = initState, action){
    switch(action.type){
        case 'UPDATE' : {
            return { ...state, value: action.payload.value }
        }
        case 'SUBMIT' : {
            return {
                ...state,
                search: action.payload.search,
                value: action.payload.value,
                url: action.payload.url
            }
        }
        case 'RESET' : {
            return initState
        }
        case 'CLICK' : {
            return {
                ...state,
                search: action.payload.search,
                url: action.payload.url,
            }
        }
        case 'FETCH' : {
            return {
                ...state,
                data: action.payload.data,
            }
        }
        default : return state
    }
}