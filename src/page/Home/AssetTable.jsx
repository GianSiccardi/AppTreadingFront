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
import { useNavigate } from 'react-router-dom'
  
const AssetTable = () => {

const navigate=useNavigate();

  return (
    <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">
            Moneda
        </TableHead>
        <TableHead>Simbolo</TableHead>
        <TableHead>Volumen</TableHead>
        <TableHead>Capitalizacion de mercado</TableHead>
        <TableHead>24</TableHead>


        <TableHead className="text-right">Price</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        {[1,1,1,1,1,1,1,1,1].map((item, index) => (
          <TableRow key={index}>
            <TableCell onClick={()=>navigate(`/market/bitcoin`)} className="font-medium flex items-center gap-2">
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
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        ))}
      </TableBody>
  </Table>
  
  )
}

export default AssetTable
