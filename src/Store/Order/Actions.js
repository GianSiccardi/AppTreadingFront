import axios from 'axios';
import api,{ API_BASE_URL } from '@/config/api';

import {
  PAY_ORDER_REQUEST,
  PAY_ORDER_SUCCESS,
  PAY_ORDER_FAILURE,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAILURE
} from './ActionsTypes';

// Acción para pagar un pedido
export const payOrder = (jwt, orderData, amount) => async (dispatch) => {
  dispatch({ type: PAY_ORDER_REQUEST });
  try {
    console.log("Request URL:", `${API_BASE_URL}/orders/pay`);
    console.log("Request Headers:", { Authorization: `Bearer ${jwt}` });
    console.log("Order Data:", orderData);

    const response = await axios.post(`${API_BASE_URL}/orders/pay`, orderData, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: PAY_ORDER_SUCCESS,
      payload: response.data,
      amount,
    });
  } catch (error) {
    console.error("Error Response:", error.response);
    dispatch({
      type: PAY_ORDER_FAILURE,
      payload: error.response ? error.response.data : error.message,
    });
  }
};



export const getOrder = (jwt,orderId) => async (dispatch) => {
  dispatch({ type: GET_ORDER_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/${orderId}`,{
        headers: {
            Authorization: `Bearer ${jwt}`,
          
        }, 
    });
    dispatch({ type: GET_ORDER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_ORDER_FAILURE, payload: error.message });
  }
};



export const getAllOrders = ({jwt,orderType,assetSymbol}) => async (dispatch) => {
  dispatch({ type: GET_ALL_ORDERS_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}/orders`,{
        headers: {
            Authorization: `Bearer ${jwt}`,
          
        }, 
        params:{
            order_type: orderType,
            asset_symbol: assetSymbol
        }
    });
    
    dispatch({ type: GET_ALL_ORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_ALL_ORDERS_FAILURE, payload: error.message });
  }
};