import { combineReducers } from 'redux';
import memberReducer from './memberReducer';

const allReducers = combineReducers({
  memberReducer
});

export default allReducers;


