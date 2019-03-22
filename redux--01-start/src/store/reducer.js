import {combineReducers} from 'redux';

import counter from './reducers/counter'
import result from './reducers/result';

export const reducer = combineReducers({
    counter,
    result
});

export default reducer;