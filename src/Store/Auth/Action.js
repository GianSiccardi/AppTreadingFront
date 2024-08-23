import { LOGIN_FAILURE, LOGIN_SUCCES, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCES } from "./ActionTypes";

export const register=(useData)=>async(dispatch)=>{
    const baseUrl="http://localhost:8080"
    
    try{

        dispatch({type:REGISTER_REQUEST})

        const response = await axios.post(`${baseUrl}/auth/register`, useData);
        const user=response.data;
        console.log(user);
        dispatch({type:REGISTER_SUCCES,payload:user.jwt})
    }catch(error){

        dispatch({type:REGISTER_FAILURE,payload:error.message})
        console.log(error)

    }

}

export const login=(useData)=>async(dispatch)=>{
    const baseUrl="http://localhost:8080"
    
    try{

        dispatch({type:LOGIN_REQUEST})

        const response = await axios.post(`${baseUrl}/auth/login`, useData);
        const user=response.data;
        console.log(user);
        dispatch({type:LOGIN_SUCCES_SUCCES,payload:user.jwt})
    }catch(error){

        dispatch({type:LOGIN_FAILURE,payload:error.message})
        console.log(error)

    }

}

export const getUSer=(jwt)=>async(dispatch)=>{
    const baseUrl="http://localhost:8080"
    
    try{

        dispatch({type:GET_USER_REQUEST})

        const response = await axios.get(`${baseUrl}/customers/profile`,{
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