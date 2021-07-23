import {combineReducers, createStore,applyMiddleware} from 'redux';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {Promotions} from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import {InitialFeedback} from './forms';
import { composeWithDevTools } from 'redux-devtools-extension';

export const ConfigureStore = () =>{
    const store = createStore(
      combineReducers({
          dishes:       Dishes,
          comments :    Comments,
          leaders :     Leaders,
          promotions :  Promotions,
          ...createForms({
            feedback:InitialFeedback
          })
      }),
      composeWithDevTools(
      applyMiddleware(thunk,logger)
    ));
    return store;
}