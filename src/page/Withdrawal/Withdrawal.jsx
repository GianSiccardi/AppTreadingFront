import React from 'react'
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

const Withdrawal = () => {

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
          {[1,1,1,1,1,1,1,1,1].map((item, index) => (
            <TableRow key={index}>
                   <TableCell className="pl-5">
                  <p>2024/04</p>
                
                </TableCell>
             
                <TableCell>1000000000</TableCell>

              
              <TableCell>1000000000</TableCell>
             
              <TableCell>1000000000</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
    </Table>
    </div>
  )
}

export default Withdrawal
