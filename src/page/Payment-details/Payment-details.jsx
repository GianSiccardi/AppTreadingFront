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
import { useDispatch, useSelector } from 'react-redux'
import { getPaymentDetails } from '@/Store/WithDrawal/Actions'


const PaymentDetails = () => {
  const { withdrawal } = useSelector(store => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaymentDetails({ jwt: localStorage.getItem("jwt") }));
  }, [dispatch]);

  const maskAccountNumber = (number) => {
    const length = 10; 
    if (!number || number.length < length) {
   
      return 'Invalid number'; 
    }
    const maskedLength = length - 4; 
    const maskedPart = '*'.repeat(maskedLength); 
    const visiblePart = number.slice(-4);
    return maskedPart + visiblePart;
  };
  return (
    <div className='px-20'>
      <h1 className='text-3xl font-bold py-10'>Detalles de pago</h1>
      {withdrawal.paymentDetails && withdrawal.paymentDetails.accountNumber ? (
        <Card>
          <CardHeader>
            <CardTitle>Banco</CardTitle>
            <CardDescription>
              A/C No: {maskAccountNumber(withdrawal.paymentDetails?.accountNumber)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex items-center'>
              <p className='w-32'>A/C Holder</p>
              <p className='text-gray-400'>{withdrawal.paymentDetails?.accountHolderName}</p>
            </div>
            <div className="flex items-center">
              <p className='w-32'>ISFC</p>
              <p className='text-gray-400'>{withdrawal.paymentDetails?.bankName}</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Dialog>
          <DialogTrigger>
            <Button className="py-6">Agregar detalles de pagos</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Detalles de pago</DialogTitle>
            </DialogHeader>
            <PaymentDetailsForm />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default PaymentDetails;
