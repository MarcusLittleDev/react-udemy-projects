import {STORE_RESULT, DELETE_RESULT} from '../actions/actionTypes';
import {updateObject} from '../utility.js'

const initialState ={
    results:[]
}

const deleteResult = (state, action) => {
    const updatedResults = state.results.filter(
        (result) => result.id !== action.resultId
    );
    return updateObject(
        state, 
        {results: updatedResults}
    );
}

const storeResult = (state, action) => {
    const updatedResults = state.results.concat(
        {id:new Date(),value:action.value}
    );
    return updateObject(
        state, 
        {results: updatedResults}
    );
}

const result = (state = initialState, action) => {
    switch (action.type) {
        case STORE_RESULT:
            return storeResult(state, action)
        case DELETE_RESULT:
            return deleteResult(state, action)
        default:
            return state;
    }
}

export default result