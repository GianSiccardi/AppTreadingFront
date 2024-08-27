import { Input } from '@/components/ui/input'
import { Dialog, DialogClose } from '@radix-ui/react-dialog'
import React from 'react'
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux'
import { transferMoney } from '@/Store/Wallet/Actions';


const TransferForm = () => {
  const dispatch =useDispatch();
  const {wallet}=useSelector(store=>store)
const[formData,setFormData]=React.useState({amount:'',walletId:'',purpose:''})



const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
}



const handleSubmit=()=>{
 dispatch(transferMoney({
  jwt:localStorage.getItem("jwt"),
  walletId:formData.walletId,
 reqData:{ amount:formData.amount,
  purpose:formData.purpose}
 }))
}
  return (
    <div className='pt-10 space-y-5'>
      <div>
        <h1 className='pb-3 text-xl font-bold'>Ingre el monto</h1>
        <Input
        name="amount"
        onChange={handleChange}
        value={formData.amount}
        className="py-7"
        placeholder="$9999"/>
      </div>
      
      <div>
        <h1 className='pb-3 text-xl font-bold'>Id billetera</h1>
        <Input
        name="walletId"
        onChange={handleChange}
        value={formData.walletId}
        className="py-7"
        placeholder="#ADER455"/>
      </div>

      <div>
        <h1 className='pb-3 text-xl font-bold'>Motivo</h1>
        <Input
        name="purpose"
        onChange={handleChange}
        value={FormData.amount}
        className="py-7"
        placeholder="Regalo para un amigo"/>
      </div>
<DialogClose className='w-full'>
<Button className="w-full py-7" onClick={handleSubmit}>Enviar</Button>
</DialogClose>
    </div>
    
  )
}

export default TransferForm
