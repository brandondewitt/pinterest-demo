import { combineReducers } from 'redux';
import pins from 'pin/reducer';

const rootReducer = combineReducers({
  pins
});

export default rootReducer;
