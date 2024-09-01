import axios from 'axios';
import api,{ API_BASE_URL } from '@/config/api';

import {
  GET_ASSET_REQUEST,
  GET_ASSET_SUCCESS,
  GET_ASSET_FAILURE,
  GET_USER_ASSETS_REQUEST,
  GET_USER_ASSETS_SUCCESS,
  GET_USER_ASSETS_FAILURE,
  GET_ASSET_DETAILS_REQUEST,
  GET_ASSET_DETAILS_SUCCESS,
  GET_ASSET_DETAILS_FAILURE 

  } from './ActionsTypes';

  // Action creator for getting asset
export const getAsset = (assetId ,jwt) => async (dispatch) => {
    dispatch({ type: GET_ASSET_REQUEST });
    try {
      const response = await axios.get(`${API_BASE_URL}/assets/${assetId}`,{
        headers: {
            Authorization: `Bearer ${jwt}`,
          
        },
      });
      dispatch({
        type: GET_ASSET_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: GET_ASSET_FAILURE,
        payload: error.message
      });
    }
  };
  
  export const getUserAssets = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_ASSETS_REQUEST });
    
    try {
      const response = await axios.get(`${API_BASE_URL}/assets`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      
      dispatch({
        type: GET_USER_ASSETS_SUCCESS,
        payload: response.data,
      });
  
      console.log("User assets:", response.data);
    } catch (error) {
      console.log("User data error:", error.response?.data);
      dispatch({
        type: GET_USER_ASSETS_FAILURE,
        payload: error.message,
      });
    }
  };
  
  

  export const getAssetDetails = (assetId) => async (dispatch) => {
    dispatch({ type: GET_ASSET_DETAILS_REQUEST });
    try {
      const response = await axios.get(`${API_BASE_URL}/assets/${assetId}/details`);
      dispatch({
        type: GET_ASSET_DETAILS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      console.log("asset detials ---->",error.response?.data)

      dispatch({
        type: GET_ASSET_DETAILS_FAILURE,
        payload: error.message
      });
    }
  }