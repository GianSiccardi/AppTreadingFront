import api from "@/config/api";
import { GET_USER_REQUEST } from "../Auth/ActionTypes"
import { DEPOSIT_MONEY_FAILURE, DEPOSIT_MONEY_REQUEST, DEPOSIT_MONEY_SUCCESS, GET_USER_WALLET_FAILURE, GET_USER_WALLET_REQUEST, GET_USER_WALLET_SUCCESS, GET_WALLET_TRANSACTIONS_FAILURE, GET_WALLET_TRANSACTIONS_REQUEST, GET_WALLET_TRANSACTIONS_SUCCESS, TRANSFER_MONEY_REQUEST } from "./ActionsTypes";



export const getUserWallet = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_WALLET_REQUEST });

    try {

        const response = await api.get("/wallet", {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({
            type: GET_USER_WALLET_SUCCESS,
            payload: response.data,
        });


    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_USER_WALLET_FAILURE,
            error: error.message
        })
    }
};


export const getWalletTransactions = ({ jwt }) => async (dispatch) => {
    dispatch({ type: GET_WALLET_TRANSACTIONS_REQUEST })

    try {

        const response = await api.get(`/wallet/transactions`, {
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

    try {

        const response = await api.put(`/wallet/deposit`, null, {
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

    } catch (error) {
        console.log(error);
        dispatch({
            type: DEPOSIT_MONEY_FAILURE,
            error: error.message
        })
    }
}


export const paymentHandle=({jwt,amount,paymentMethod})=>async(dispatch)=>{
    dispatch({type: DEPOSIT_MONEY_REQUEST})

    try{

const response=await api.post(`/payment/${paymentMethod}/amount/${amount}`,null,{
    headers: {
        Authorization: `Bearer ${jwt}`
    }
})

window.location.href=response.data.payment_url
/*dispatch({
    type: DEPOSIT_MONEY_SUCCESS,
    payload: response.data
})*/

    }catch(error){
        console.log(error);
        dispatch({
            type: DEPOSIT_MONEY_FAILURE,
            error: error.message
        })
    }
}

export const transferMoney =({jwt,walletId,reqData})=>async(dispatch)=>{

dispatch({type:TRANSFER_MONEY_REQUEST})

try{
    const response=await api.put(`/wallet/${walletId}/transfer`,{
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })

    dispatch({
        type: TRANSFER_MONEY_SUCCESS,
        payload: response.data
    })

}catch(error){
    console.log(error);
    dispatch({
        type: TRANSFER_MONEY_FAILURE,
        error: error.message
    })
}

}

