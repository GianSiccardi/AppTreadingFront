import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import PaymentDetailsForm from './PaymentDetailsForm'
import { useDispatch } from 'react-redux'
import { getPaymentDetails } from '@/Store/WithDrawal/Actions'


const PaymentDetails = () => {

  const {withdrawal}=useState(store=>store);
  const dispatch=useDispatch();

useEffect(()=>{
  dispatch(getPaymentDetails({jwt:localStorage.getItem("jwt")}))
})

  return (
    <div className='px-20'>
      <h1 className='text-3xl fonto-bold py-10'>Detalles de pago</h1>
  { true?   <Card>
        <CardHeader>
          <CardTitle>
            Banco
          </CardTitle>
          <CardDescription>
            A/C No:
            ********1651
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex items-center'>
            <p className='w-32'> A/C Holder</p>
            <p className='text-gray-400'>: Gian SIccardi</p>

          </div>
          <div className="flex items-center">
            <p className='w-32'>
              ISFC
            </p>
            <p className='text-gray-400'>yesb00007</p>


          </div>
        </CardContent>
      </Card> :   <Dialog>
  <DialogTrigger>
    <Button className="py-6">Agregar detalles de pagos</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Detalles de pago</DialogTitle>

    </DialogHeader>
    <PaymentDetailsForm></PaymentDetailsForm>
  </DialogContent>
</Dialog>}
      <Dialog>
  <DialogTrigger>
    <Button className="py-6">Agregar detalles de pagos</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Detalles de pago</DialogTitle>

    </DialogHeader>
    <PaymentDetailsForm></PaymentDetailsForm>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default PaymentDetails
