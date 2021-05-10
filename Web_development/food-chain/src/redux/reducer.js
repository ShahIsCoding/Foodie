import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotion';
import { LEADERS } from '../shared/leaders';

export const intialState = {
    dishes: DISHES, 
    comments: COMMENTS, 
    leaders: LEADERS, 
    promotions: PROMOTIONS
};

export const Reducer = (state = intialState,action) => {
    return state;
}