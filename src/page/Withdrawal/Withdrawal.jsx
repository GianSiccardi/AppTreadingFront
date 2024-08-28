import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { useDispatch, useSelector } from 'react-redux'
import { getWithdrawalHistory } from '@/Store/WithDrawal/Actions'

const Withdrawal = () => {

  const dispatch =useDispatch();
  const {wallet,withdrawal}=useSelector(store=>store)


  useEffect(()=>{
    dispatch(getWithdrawalHistory(localStorage.getItem("jwt")))
  },[])

  return (
    <div className="p-10 lg:px-20">
    <h1 className='font-bold text-3xl pb-5'>Retiros</h1>
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="p-5">
            Fecha 
          </TableHead>
          <TableHead>Metodo</TableHead>
          <TableHead>Monto</TableHead>
         
          <TableHead>Estado</TableHead> 
  
        </TableRow>
      </TableHeader>
      <TableBody>
          {[withdrawal.withdrawalHistory].map((item, index) => (
            <TableRow key={index}>
                   <TableCell className="pl-5">
                  <p>{item.dateTime ? item.dateTime.toString() : 'N/A'}</p>
                
                </TableCell>
             
                <TableCell>Banco</TableCell>

              
              <TableCell>{item.amount}</TableCell>
             
              <TableCell className="text-right">{item.status}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
    </Table>
    </div>
  )
}

export default Withdrawal
