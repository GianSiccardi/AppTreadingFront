import { API_BASE_URL } from "@/config/api";
import { LOGIN_FAILURE, LOGIN_SUCCES,LOGIN_REQUEST,GET_USER_REQUEST, GET_USER_SUCCES,GET_USER_FAILURE,LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCES } from "./ActionTypes";
import axios from 'axios';


export const register=(useData)=>async(dispatch)=>{
   
    
    try{

        dispatch({type:REGISTER_REQUEST})

        const response = await axios.post(`${API_BASE_URL}/auth/register`, useData);
        const user=response.data;
        console.log(user);
        dispatch({type:REGISTER_SUCCES,payload:user.jwt})
        localStorage.setItem("jwt",user.jwt)
    }catch(error){

        dispatch({type:REGISTER_FAILURE,payload:error.message})
        console.log(error)

    }

}

export const login = ({ data, navigate }) => async (dispatch) => {
   
   
   
    console.log("Login function called", data);
    
    try {
        dispatch({ type: LOGIN_REQUEST });

        const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
        const user = response.data;
        console.log(user);
        
        dispatch({ type: LOGIN_SUCCES, payload: user.jwt }); 
        localStorage.setItem("jwt", user.jwt);
        navigate("/");
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
        console.log(error);
    }
};


//funcion que uso en el App.jsx
export const getUSer=(jwt)=>async(dispatch)=>{
  
    
    try{

        dispatch({type:GET_USER_REQUEST})

        const response = await axios.get(`${API_BASE_URL}/customers/profile`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });
        const user=response.data;
        console.log(user);
        dispatch({type:GET_USER_SUCCES,payload:user})
    }catch(error){

        dispatch({type:GET_USER_FAILURE,payload:error.message})
        console.log(error)

    }

}

export const logOut=()=>(dispatch)=>{
    localStorage.clear();
    dispatch({type:LOGOUT})
}