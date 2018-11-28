import {combineReducers, Reducer} from 'redux';
import {AppState} from '../index';
import { routerReducer } from '@angular-redux/router';

export const reducers: Reducer = combineReducers<AppState>({
  router: routerReducer
});
