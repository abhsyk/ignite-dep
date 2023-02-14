import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import gameDetailsReducer from './gameDetailsReducer';

// -> useTypedSelector
export type RootState = ReturnType<typeof reducers>;

// -> store
const reducers = combineReducers({
  games: gamesReducer,
  gameDetails: gameDetailsReducer,
});

export default reducers;
