import api, { API_BASE_URL } from "@/config/api";
import { GET_USER_REQUEST } from "../Auth/ActionTypes"
import { DEPOSIT_MONEY_FAILURE, DEPOSIT_MONEY_REQUEST, 
    DEPOSIT_MONEY_SUCCESS, GET_USER_WALLET_FAILURE, GET_USER_WALLET_REQUEST,
     GET_USER_WALLET_SUCCESS, GET_WALLET_TRANSACTIONS_FAILURE, GET_WALLET_TRANSACTIONS_REQUEST,
      GET_WALLET_TRANSACTIONS_SUCCESS, TRANSFER_MONEY_REQUEST,TRANSFER_MONEY_SUCCESS ,TRANSFER_MONEY_FAILURE} from "./ActionsTypes";
import axios from 'axios';



export const getUserWallet = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_WALLET_REQUEST });

    try {

        const response = await axios.get(`${API_BASE_URL}/wallet`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            },
          });
  
          if (response.status === 200) { // Asegúrate de que la respuesta es correcta
            const data = response.data; // Axios ya convierte la respuesta a JSON
            dispatch({ type: GET_USER_WALLET_SUCCESS, payload: data });
        } else {
            console.error('Error en la respuesta del servidor:', response.statusText);
            dispatch({ type: GET_USER_WALLET_FAILURE, payload: 'Error en la respuesta del servidor' });
        }
    } catch (error) {
        console.error('Error al obtener datos:', error);
        dispatch({ type: GET_USER_WALLET_FAILURE, payload: error.message });
    }
}
export const getWalletTransactions = ({ jwt }) => async (dispatch) => {
    dispatch({ type: GET_WALLET_TRANSACTIONS_REQUEST })

    try {

        const response = await axios.get(`${API_BASE_URL}/wallet/transactions`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({
            type: GET_WALLET_TRANSACTIONS_SUCCESS,
            payload: response.data
        })

    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_WALLET_TRANSACTIONS_FAILURE,
            error: error.message
        })

    }

};



export const depositMoney = ({ jwt, orderId, paymentId, navigate }) => async (dispatch) => {
    dispatch({ type: DEPOSIT_MONEY_REQUEST })

    console.log("orderId---paymentId-------",orderId,paymentId)

    try {

        const response = await axios.put(`${API_BASE_URL}/wallet/deposit`, null, {
            params: {
                order_id: orderId,
                payment_id: paymentId,
            },
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })


        dispatch({
            type: DEPOSIT_MONEY_SUCCESS,
            payload: response.data
        })

          navigate("/wallet")


    } catch (error) {
        console.log(error);
        dispatch({
            type: DEPOSIT_MONEY_FAILURE,
            error: error.message
        })
    }
}

export const paymentHandle = ({ jwt, amount, paymentMethod }) => async (dispatch) => {
    dispatch({ type: DEPOSIT_MONEY_REQUEST });

    try {
        const response = await axios.post(`${API_BASE_URL}/payment/${paymentMethod}/amount/${amount}`, null, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

      
        if (response.data && response.data.payment_url) {
            window.location.href = response.data.payment_url;
        } else {
            console.error("URL de pago no encontrada en la respuesta");
        }

        dispatch({
            type: DEPOSIT_MONEY_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        console.log("Error en la solicitud de pago:", error);
        dispatch({
            type: DEPOSIT_MONEY_FAILURE,
            error: error.message
        });
    }
};


export const transferMoney = ({jwt, walletId, reqData}) => async (dispatch) => {
    dispatch({ type: TRANSFER_MONEY_REQUEST });

    try {
        const response = await axios.put(`${API_BASE_URL}/wallet/${walletId}/transfer`, reqData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({
            type: TRANSFER_MONEY_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: TRANSFER_MONEY_FAILURE,
            error: error.message
        });
    }
};

