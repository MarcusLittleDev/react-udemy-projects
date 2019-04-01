
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'

export const actionCreators = {
    increment: () => {
        return {
            type: INCREMENT,
        }
    },

    decrement: () => {
        return {
            type: DECREMENT
        }
    },

    add: value => {
        return {
            type: ADD,
            value
        }
    },

    subtract: value => {
        return {
            type: SUBTRACT,
            value
        }
    },

    storeResult: value => {
        return {
            type: STORE_RESULT,
            value
        }
    },

    deleteResult:  resultId => {
        return {
            type: DELETE_RESULT,
            resultId
        }
    }
}