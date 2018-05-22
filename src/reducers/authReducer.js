import * as types from '../actions/types';

const INITIAL_STATE = {
    email: '', 
    password: '', 
    authenticated: false, 
    user: null, 
    error: null,
    loading: false, 
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) 
    {
        case types.EMAIL_CHANGED:
            return { ...state, email: action.payload }

        case types.PASSWORD_CHANGED:
            return { ...state, password: action.payload }

        case types.BEGIN_LOADING:
            return { ...state, loading: true } 

        case types.END_LOADING:
            return { ...state, loading: false }

        case types.LOGIN_USER_SUCCESS:
            return {
                ...state, 
                authenticated: true, 
                error: null,
                user: action.payload
            }

        case types.LOGIN_USER_FAILURE:
            return {
                ...state, 
                authenticated: false, 
                user: null,
                error: action.payload,
            }

        default: 
            return state;
    }
}