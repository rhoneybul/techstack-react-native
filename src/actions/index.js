import * as types from './types';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

const API_URL = 'http://192.168.15.6:4000/api'

export const emailChanged = (text) => {
    return {
        type: types.EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: types.PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: types.BEGIN_LOADING })
        axios.post(`${API_URL}/session`, { 
            "email": email, 
            "password": password,
        })
            .then(response => {
                if ( response.status === 200 || response.status === 201 ) { 
                    dispatch({ 
                        type: types.LOGIN_USER_SUCCESS, 
                        payload: response.data.data,
                    })
                    Actions.main();
                } else { 
                    dispatch({
                        type: types.LOGIN_USER_FAILURE,
                        payload: "Authentication Error"
                    })
                }
                dispatch({ type: types.END_LOADING })
            })
            .catch(error => {
                dispatch({
                    type: types.LOGIN_USER_FAILURE,
                    payload: "Authentication Error"
                })
                dispatch({ type: types.END_LOADING })
            })
    }
}