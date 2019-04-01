import * as actionTypes from './actionTypes'
export const resultActionCreators = {
    storeResult: value => {
        return (dispatch, getState) => {
           // console.log(getState().counter.counter)
            setTimeout(() => {
                dispatch(saveResult(value))
            }, 2000)
        }
    },

    deleteResult:  resultId => {
        return {
            type: actionTypes.DELETE_RESULT,
            resultId
        }
    }
}

const saveResult = value => {
    return {
        type: actionTypes.STORE_RESULT,
        value
    }
}