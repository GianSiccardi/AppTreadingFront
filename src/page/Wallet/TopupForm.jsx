import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label';
import { RadioGroup } from '@/components/ui/radio-group';
import { DotFilledIcon } from '@radix-ui/react-icons';

import { RadioGroupItem } from '@radix-ui/react-radio-group';
import React from 'react'

const TopupForm = () => {

const[amount,setAmount]= React.useState(''); 
const[paymentMethod,setPaymentMethod]=React.useState('STRIPÉ')


const handleChnage =(e)=>{
    setAmount(e.target.value)
}

const handlePaymentMethodChange=(value)=>{
    setPaymentMethod(value)
}

const handleSubmit=()=>{

}


  return (
    <div className='pt-10 space-y-5 '>
        <div >
              <h1 className='pb-1'>Ingresa el monto</h1>    
              <Input onChange={handleChnage}
              value={amount}
              className="py-7 text-lg" placeholder="$9999" ></Input>        
        </div>

        <div >
            <h1 className='pb-1'>Selecciona el metodo de pago</h1>
            <RadioGroup onValueChange={(value)=>handlePaymentMethodChange(value)} className="flex" defaultValue="STRIPE">
              <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
                
                 <RadioGroupItem 
                 icon={DotFilledIcon}
                 className='h-9 w-9'
                 value='STRIPE'
                 id='r1'
                 ></RadioGroupItem>
              </div>
              <Label htmlFor="r1">
                <div className="bg-white rounded-md px-5 py-2  w-32">
                    <img src="https://i0.wp.com/www.frenchweb.fr/wp-content/uploads/2023/02/LOGO-850-stripe.png?fit=850%2C478&ssl=1" alt="" />

                </div>

              </Label>
              
            </RadioGroup>
        </div>
        <div>
            <h1 className='pb-1'>Selecciona el metodo de pago</h1>
            <RadioGroup onValueChange={(value)=>handlePaymentMethodChange(value)} className="flex" defaultValue="PAYPAL">
              <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
                
                 <RadioGroupItem 
                 icon={DotFilledIcon}
                 className='h-9 w-9'
                 value='PAYPAL'
                 id='r2'
                 ></RadioGroupItem>
              </div>
              <Label htmlFor="r2">
                <div className="bg-white rounded-md px-5 py-3 w-32">
                    <img src="https://www.pngall.com/wp-content/uploads/2016/03/Paypal-Logo-PNG.png" alt="" />

                </div>

              </Label>
              
            </RadioGroup>
        </div>

        <Button onClick={handleSubmit} className="w-full py-7 ">
            Enviar
        </Button>
      
    </div>
  )
}

export default TopupForm
