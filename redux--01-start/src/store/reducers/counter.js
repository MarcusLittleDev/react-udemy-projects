import {INCREMENT, DECREMENT, ADD, SUBTRACT} from '../actions/actionTypes';
import {updateObject} from '../utility.js'

const initialState ={
    counter: 0
}

const counter = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
        return updateObject(state, {counter: state.counter + 1})
        case DECREMENT:
            return updateObject(state, {counter: state.counter - 1})
        case ADD:
        return updateObject(state, {counter: state.counter + action.value})
        case SUBTRACT:
            return updateObject(state, {counter: state.counter - action.value})
        default:
            return state;
    }
}

export default counter;