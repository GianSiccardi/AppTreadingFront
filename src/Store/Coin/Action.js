
import axios from "axios";
import { FETCH_COIN_BY_ID_FAILURE, FETCH_COIN_BY_ID_REQUEST, FETCH_COIN_BY_ID_SUCCESS, FETCH_COIN_DETAILS_FAILURE, FETCH_COIN_DETAILS_REQUEST, FETCH_COIN_DETAILS_SUCCESS, FETCH_COIN_LIST_FAILURE, FETCH_COIN_LIST_REQUEST, FETCH_COIN_LIST_SUCCESS, FETCH_MARKET_CHART_FAILURE, FETCH_MARKET_CHART_REQUEST, FETCH_MARKET_CHART_SUCCESS, FETCH_TOP_50_FAILURE, FETCH_TOP_50_REQUEST, FETCH_TOP_50_SUCCESS, SEARCH_COIN_FAILURE, SEARCH_COIN_REQUEST, SEARCH_COIN_SUCCESS } from "./ActionTypes";
import api, { API_BASE_URL } from "@/config/api";

export const getCoinList = (page) => async (dispatch) => {
    dispatch({ type: FETCH_COIN_LIST_REQUEST });

    try {
        
        const jwt = localStorage.getItem('jwt');

        
        const { data } = await axios.get(`${API_BASE_URL}/coins?page=${page}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        console.log("coins list", data);
        dispatch({ type: FETCH_COIN_LIST_SUCCESS, payload: data });

    } catch (error) {
        // Manejar el error adecuadamente
        const errorMessage = error.response ? error.response.data : error.message;
        dispatch({ type: FETCH_COIN_LIST_FAILURE, payload: errorMessage });
        console.error('Error fetching coin list:', errorMessage);
    }
};

export const getTop50CoinList = () => async (dispatch) => {
    dispatch({ type: FETCH_TOP_50_REQUEST });
    
   
    try {
        const jwt = localStorage.getItem('jwt');
        const response = await axios.get(`${API_BASE_URL}/coins/top50`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        dispatch({ type: FETCH_TOP_50_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_TOP_50_FAILURE, payload: error.message });
        console.log(error);
    }
};

export const fetchMarketChart=({coinId,days,jwt})=>async(dispatch)=>{
    dispatch({type:FETCH_MARKET_CHART_REQUEST})
    try{

        const response=await axios.get(`${API_BASE_URL}/coins/${coinId}/chart?days=${days}`,{
            
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        })
        console.log('API response data:', response.data);

        dispatch({type:FETCH_MARKET_CHART_SUCCESS,payload:response.data})


    }catch(error){
        console.log(error);
        dispatch({type:FETCH_MARKET_CHART_FAILURE,payload:error.mesagge})
    }
}


export const fetchCoinById=(coinId)=>async(dispatch)=>{
    dispatch({type:FETCH_COIN_BY_ID_REQUEST})

    try{

        const response=await axios.get(`${API_BASE_URL}/coins/${coinId}`)
        dispatch({type:FETCH_COIN_BY_ID_SUCCESS,payload:response.data})

    }catch(error){

        console.log(error);
        dispatch({type:FETCH_COIN_BY_ID_FAILURE,payload:error.mesagge})
    }
}

export const fetchCoinDetails = ({ coinId, jwt }) => async (dispatch) => {
    dispatch({ type: FETCH_COIN_DETAILS_REQUEST });

    try {
        const response = await axios.get(`${API_BASE_URL}/coins/details/${coinId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        console.log('Fetched Coin Details:', response.data);
        dispatch({ type: FETCH_COIN_DETAILS_SUCCESS, payload: response.data });
    } catch (error) {
        const errorMessage = error.response ? error.response.data : error.message;
        dispatch({ type: FETCH_COIN_DETAILS_FAILURE, payload: errorMessage });
        console.error('Error fetching coin details:', errorMessage);
    }
};

export const searchCoin=(keyword)=>async(dispatch)=>{
    dispatch({type:SEARCH_COIN_REQUEST});

    try{
        const response=await api.get(`/coins/search?q=${keyword}`)
        dispatch({type:SEARCH_COIN_SUCCESS,payload:response.data})

    }catch(error){
        console.log(error);
        dispatch({type:SEARCH_COIN_FAILURE,payload:error.mesagge})
    }
}






