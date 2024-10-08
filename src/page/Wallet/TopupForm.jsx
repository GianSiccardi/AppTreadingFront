import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { API_BASE_URL } from '@/config/api';
import { paymentHandle } from '@/Store/Wallet/Actions';
import { DotFilledIcon } from '@radix-ui/react-icons';


import React from 'react'
import { useDispatch } from 'react-redux';

const TopupForm = () => {

const[amount,setAmount]= React.useState(''); 
const[paymentMethod,setPaymentMethod]=React.useState('STRIPE')
const dispatch=useDispatch();



const handleChange = (e) => {
    console.log("Monto ingresado:", e.target.value);  // Muestra el valor del input
    setAmount(e.target.value);  // Actualiza el estado con el nuevo valor
}

const handlePaymentMethodChange = (value) => {
    console.log("Método de pago seleccionado:", value);
    setPaymentMethod(value);
}

const handleSubmit=()=>{

    if (!paymentMethod || !amount) {
        console.error("Método de pago o monto no definidos");
        return;
    }
/*dispatch(paymentHandle({jwt:localStorage.getItem("jwt"),
    paymentMethod,
    amount
}))*/
const jwt = localStorage.getItem("jwt");
if (!jwt) {
  console.error("JWT no encontrado en el localStorage");
  return;
}

dispatch(paymentHandle({ jwt, paymentMethod, amount }))
  .then(response => {
    if (response.payload.success) {
      window.location.href = `${API_BASE_URL}/wallet`; 
    } else {
      console.error('Error:', response.payload.error);
    }
  })
  .catch(error => {
    console.error('Error en la solicitud de pago:', error);
  });
};



return (
    <div className='pt-10 space-y-5 '>
    <div >
        <h1 className='pb-1'>Ingresa el monto</h1>    
        <Input 
            onChange={handleChange}
            value={amount}
            className="py-7 text-lg" 
            placeholder="$9999" 
        />
    </div>

    <div>
        <h1 className='pb-1'>Selecciona el método de pago</h1>
        <RadioGroup 
            onValueChange={(value) => handlePaymentMethodChange(value)} 
            className="flex flex-col space-y-3" 
            defaultValue="STRIPE"
        >
            <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
                <RadioGroupItem 
                    className='h-9 w-9 rounded-md border'
                    value='STRIPE'
                    id='r1'
                >
                    {paymentMethod === 'STRIPE' && (
                        <DotFilledIcon size={40} className='ml-2' />
                    )}
                </RadioGroupItem>
            
                <Label htmlFor="r1">
                    <div className="bg-white rounded-md px-5 py-2 w-32">
                        <img 
                            className="h-10" 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/640px-Stripe_Logo%2C_revised_2016.svg.png" 
                            alt="Stripe Logo"
                        />
                    </div>
                </Label>
            </div>

            <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
                <RadioGroupItem 
                    className='h-9 w-9 rounded-md border'
                    value='PAYPAL'
                    id='r2'
                >
                    {paymentMethod === 'PAYPAL' && (
                        <DotFilledIcon size={40} className='ml-2' />
                    )}
                </RadioGroupItem>
            
                <Label htmlFor="r2">
                    <div className="bg-white rounded-md px-5 py-3 w-32">
                        <img 
                            className="h-10" 
                            src="https://www.pngall.com/wp-content/uploads/2016/03/Paypal-Logo-PNG.png" 
                            alt="PayPal Logo"
                        />
                    </div>
                </Label>
            </div>
        </RadioGroup>
    </div>

    <Button onClick={handleSubmit} className="w-full py-7">
        Enviar
    </Button>
</div>
    )
}

export default TopupForm