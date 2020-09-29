import * as actionTypes from '../actionTypes/action-types';

type TodosReducer = (state: any, action: any) => any;

const initialState = {
    loggedIn: 'dupaaa'
}

const auth: TodosReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default auth