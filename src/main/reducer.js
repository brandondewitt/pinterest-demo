import { combineReducers } from 'redux';
import pins from 'pin/reducer';
import notify from 'notify/reducer';

const rootReducer = combineReducers({
  pins,
  notify
});

export default rootReducer;
