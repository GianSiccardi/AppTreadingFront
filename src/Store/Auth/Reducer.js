import {
    REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCES, LOGIN_REQUEST,
    GET_USER_REQUEST, LOGIN_SUCCES, LOGIN_FAILURE, GET_USER_FAILURE,
    GET_USER_SUCCES
} from "./ActionTypes";

const initialState = {
    user: null,
    loading: false,
    error: null,
    jwt: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:

        case GET_USER_REQUEST:
            return { ...state, loading: true, error: null }



        case REGISTER_SUCCES:
        case LOGIN_SUCCES:

            return { ...state, loading: false, error: null, jwt: action.payload }

        case GET_USER_SUCCES:
            return { ...state, user: action.payload, loading: false, error: null }

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:

            return { ...state, loading: false, error: action.payload }


        default:
            return state;
    }

}

export default authReducer;