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

const Activity = () => {
  return (
    <div className="p-10 lg:px-20">
    <h1 className='font-bold text-3xl pb-5'>Actividad</h1>
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="p-5">
            Fecha y Hora
          </TableHead>
          <TableHead>Moneda</TableHead>
          <TableHead>Precio compra</TableHead>
          <TableHead>Precio venta</TableHead>
          <TableHead>Tipo de orden</TableHead>
          <TableHead>Ganancia/Peridida</TableHead>
          <TableHead>Valor</TableHead>

    
  
        </TableRow>
      </TableHeader>
      <TableBody>
          {[1,1,1,1,1,1,1,1,1].map((item, index) => (
            <TableRow key={index}>
                   <TableCell className="pl-5">
                  <p>2024/04</p>
                  <p>05:22:01</p>
                </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
              
                <Avatar className='w-8 h-8 flex items-center justify-center'>
           
                  <AvatarImage
                    src='https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'
                    className='w-full h-full object-cover'
                  />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>1000000000</TableCell>
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

export default Activity
