import api from '@/config/api';
import {
    WITHDRAWAL_REQUEST,
    WITHDRAWAL_SUCCESS,
    WITHDRAWAL_FAILURE,
    WITHDRAWAL_PROCEED_REQUEST,
    WITHDRAWAL_PROCEED_SUCCESS,
    WITHDRAWAL_PROCEED_FAILURE,
    GET_WITHDRAWAL_HISTORY_REQUEST,
    GET_WITHDRAWAL_HISTORY_SUCCESS,
    GET_WITHDRAWAL_HISTORY_FAILURE,
 
    ADD_PAYMENT_DETAILS_REQUEST,
    ADD_PAYMENT_DETAILS_SUCCESS,
    ADD_PAYMENT_DETAILS_FAILURE,
    GET_PAYMENT_DETAILS_REQUEST,
    GET_PAYMENT_DETAILS_SUCCESS,
    GET_PAYMENT_DETAILS_FAILURE
  } from './ActionsTypes';


import PaymentDetails from '@/page/Payment-details/Payment-details';



  export const withdrawalRequest=({amount,jwt})=>async dispatch=>{
    dispatch({type:WITHDRAWAL_REQUEST})

    try{

       const response =await api.post(`/withdrawal/${amount}`,null,{
        headers: {
            Authorization: `Bearer ${jwt}`,
          
        },
       })  
       
       console.log("withdrawal-----",response.data)
     dispatch({
        type:WITHDRAWAL_SUCCESS,
        payload:response.data
     })
    }catch(error){
     dispatch({
        type:WITHDRAWAL_FAILURE,
        payload:error.message
     })
    }
  }

  export const proceedWithdrawal=({id,jwt,accept})=>async dispatch=>{
    dispatch({type:WITHDRAWAL_PROCEED_REQUEST})

    try{
        const response =await api.patch(`/admin/withdrawal/${id}/proceed/${accept} `,null,{
            headers: {
                Authorization: `Bearer ${jwt}`,
              
            },   
        })
    dispatch({
        type:WITHDRAWAL_PROCEED_SUCCESS,
        payload:response.data
    })
    
    }catch(error){
        dispatch({
            type:WITHDRAWAL_PROCEED_FAILURE,
            payload:error.message
        })
    }
    
  }

  export const getWithdrawalHistory=jwt=>async dispatch=>{
    dispatch({type:GET_WITHDRAWAL_HISTORY_REQUEST})
    try{
const response=await api.get(`/withdrawal`,{
    headers: {
        Authorization: `Bearer ${jwt}`,
      
    },   
})

console.log("get withdrawal hsitroy --- ",response.data)
dispatch({
    type:GET_WITHDRAWAL_HISTORY_SUCCESS,
    payload:response.data
})


    }catch(error){
        dispatch({
            type:GET_WITHDRAWAL_HISTORY_FAILURE,
            payload:error.message
        })
    }
  }

/* export const getAllWithdrawalRequest=jwt =>async dispatch=>{
    dispatch({type:GET_WITHDRAWAL_REQUEST})
    try{

    }catch(error){
        dispatch({
           
        })
    }
  }*/

    export const addPaymentDetails=({paymentDetails,jwt})=>async dispatch=>{
     dispatch({type: ADD_PAYMENT_DETAILS_REQUEST})
     try{

     const response=await api.post(`/payment-details`,paymentDetails,{
       
        headers: {
            Authorization: `Bearer ${jwt}`,
          
        },   
        
     })

     dispatch({
        type:ADD_PAYMENT_DETAILS_SUCCESS,
        payload:response.data
     })

     }catch(error){
        dispatch({
            type:ADD_PAYMENT_DETAILS_FAILURE,
            payload:error.message
        })
     }
    

    }
    

    export const getPaymentDetails=({jwt})=>async dispatch=>{
        dispatch({type: GET_PAYMENT_DETAILS_REQUEST})
        try{
   
        const response=await api.post(`/payment-details`,{
          
           headers: {
               Authorization: `Bearer ${jwt}`,
             
           },   
        })
   
        dispatch({
           type:GET_PAYMENT_DETAILS_SUCCESS,
           payload:response.data
        })
   
        }catch(error){
           dispatch({
               type:GET_PAYMENT_DETAILS_FAILURE,
               payload:error.message
           })
        }
       
   
       }
   



