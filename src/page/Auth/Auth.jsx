import React from 'react'
import SingupForm from './SignupForm'
import { Button } from '@/components/ui/button'
import { useNavigate,useLocation } from 'react-router-dom'
import SinginForm from './SigninForm'


const Auth = () => {
    const navigate=useNavigate();
    const location=useLocation();
    
  console.log(location.pathname); 

  return (
    <div className='h-screen relative'>
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#030712] bg-opacity-50">
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  flex flex-col justify-center items-center h-[35rem] w-[30rem] 
                  rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white">
  
        <h1 className='text-6xl font-bold pb-9'>
          <span className='text-green-500'>App </span>Treading
        </h1>
  
        {location.pathname === "/signup" ? (
                   <section className='w-full'>
                   <SingupForm />
                   <div className="flex items-center justify-center mt-7 ">
                     <span>¿Ya tienes cuenta?</span>
                     <Button onClick={() => navigate("/signin")}>
                       Ingresar
                     </Button>
                   </div>
                 </section>
               ) : (
                <section className='w-full'>
                   <SinginForm />
                   <div className="flex items-center justify-center mt-7">
                     <span>¿No tienes cuenta?</span>
                     <Button onClick={() => navigate("/signup")}>
                       Registrarse
                     </Button>
                   </div>
                 </section>
     
        )}
      </div>
    </div>
  </div>
  
  )
}

export default Auth
