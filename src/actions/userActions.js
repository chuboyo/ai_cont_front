import axios from 'axios';
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,

    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,

    USER_PASSWORDRESET_REQUEST,
    USER_PASSWORDRESET_SUCCESS,
    USER_PASSWORDRESET_FAIL,

    USER_PASSWORDRESETCONFIRM_REQUEST,
    USER_PASSWORDRESETCONFIRM_SUCCESS,
    USER_PASSWORDRESETCONFIRM_FAIL,
} from '../constants/userConstants';

const base_url = 'https://summarebackend.com';
// const base_url = 'http://127.0.0.1:8000'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `${base_url}/api/login/`,
            { 'email': email, 'password': password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET })
}


export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `${base_url}/api/register/`,
            { 'username': name, 'email': email, 'password': password },
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

// currently having issues with this. To be sorted later
export const getUserDetails = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Token ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `${base_url}/api/user/`,
            config
        )

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        // console.log(user)

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Token ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `${base_url}/api/change_password/`,
            user,
            config
        )

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

        // dispatch({
        //     type: USER_LOGIN_SUCCESS,
        //     payload: data
        // })

        // localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const resetPassword = (user) => async (dispatch) => {
    try {
        dispatch({
            type: USER_PASSWORDRESET_REQUEST
        })

        

        // console.log(user)

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.post(
            `${base_url}/api/password_reset/`,
            user,
            config
        )

        dispatch({
            type: USER_PASSWORDRESET_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: USER_PASSWORDRESET_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const resetPasswordConfirm = (user) => async (dispatch) => {
    try {
        dispatch({
            type: USER_PASSWORDRESETCONFIRM_REQUEST
        })

        

        // console.log(user)

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.post(
            `${base_url}/api/password_reset/confirm/`,
            user,
            config
        )

        dispatch({
            type: USER_PASSWORDRESETCONFIRM_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: USER_PASSWORDRESETCONFIRM_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}