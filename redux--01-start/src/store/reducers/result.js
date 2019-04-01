import {STORE_RESULT, DELETE_RESULT} from '../actions/actions';

const initialState ={
    results:[]
}

const result = (state = initialState, action) => {
    switch (action.type) {
        case STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id:new Date(),value:action.value})
            }
        case DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter((result) => result.id !== action.resultId)
            }
        default:
            return state;
    }
}

export default result