import {createStore} from 'redux';
import {intialState,Reducer} from './reducer';

export const ConfigureStore = () =>{
    const store = createStore(
        Reducer,
        intialState
    );
    return store;
}