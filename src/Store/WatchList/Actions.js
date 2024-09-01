import { API_BASE_URL } from "@/config/api"
import {
    GET_USER_WATCHLIST_REQUEST,
    GET_USER_WATCHLIST_SUCCESS,
    GET_USER_WATCHLIST_FAILURE,
    ADD_COIN_TO_WATCHLIST_REQUEST,
    ADD_COIN_TO_WATCHLIST_SUCCESS,
    ADD_COIN_TO_WATCHLIST_FAILURE
  } from "./ActionsTypes"
  import axios from 'axios';


  export const getUserWatchlist = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_WATCHLIST_REQUEST });

    try {
        const response = await axios.get(`${API_BASE_URL}/watchlist/customer`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        dispatch({
            type: GET_USER_WATCHLIST_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.error('Error fetching user watchlist:', error.response ? error.response.data : error.message);
        dispatch({
            type: GET_USER_WATCHLIST_FAILURE,
            error: error.response ? error.response.data : error.message,
        });
    }
};




export const addItemTOwatchlist = (coinId, jwt) => async (dispatch) => {
    dispatch({ type: ADD_COIN_TO_WATCHLIST_REQUEST });

    try {
        const response = await axios.patch(
            `${API_BASE_URL}/watchlist/add/coin/${encodeURIComponent(coinId)}`, // Asegúrate de codificar el coinId
            {}, // Envía un cuerpo vacío si no se requiere
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        );

        dispatch({
            type: ADD_COIN_TO_WATCHLIST_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.error("error", error);
        dispatch({
            type: ADD_COIN_TO_WATCHLIST_FAILURE,
            error: error.message,
        });
    }
};

  