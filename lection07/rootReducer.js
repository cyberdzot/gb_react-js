import { combineReducers } from "redux";
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
    root: (state = {data: []}, action) => state, // это ваш существующий редьюсер
    data: dataReducer, // это наш новый dataReducer
})

export default rootReducer;