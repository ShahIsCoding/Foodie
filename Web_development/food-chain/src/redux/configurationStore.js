import {combineReducers, createStore} from 'redux';
import {Dishes} from './dishes';
import {Commets} from './comments';
import {Leaders} from './leaders';
import {Promotions} from './promotions';
export const ConfigureStore = () =>{
    const store = createStore(
      combineReducers({
          dishes:       Dishes,
          commets :     Commets,
          leaders :     Leaders,
          promotions :  Promotions
      })
    );
    return store;
}