import * as actionTypes from './actionTypes'

export const counterActionCreators = {
    increment: () => {
        return {
            type: actionTypes.INCREMENT,
        }
    },

    decrement: () => {
        return {
            type: actionTypes.DECREMENT
        }
    },

    add: value => {
        return {
            type: actionTypes.ADD,
            value
        }
    },

    subtract: value => {
        return {
            type: actionTypes.SUBTRACT,
            value
        }
    },
}