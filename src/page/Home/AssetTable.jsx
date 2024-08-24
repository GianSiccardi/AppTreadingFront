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
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
  
const AssetTable = ({coin,category}) => {

  const dispatch=useDispatch();

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
        <TableHead>24hs</TableHead>


        <TableHead className="text-right">Price</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        {coin.map((item, index) => (
          <TableRow key={item.id}>
            <TableCell onClick={()=>navigate(`/market/${item.id}`)} className="font-medium flex items-center gap-2">
              <Avatar className='w-8 h-8 flex items-center justify-center'>
                <AvatarImage
                  src={item.image}
                  className='w-full h-full object-cover'
                />
              </Avatar>
              <span>{item.name}</span>
            </TableCell>
            <TableCell>{item.symbol}</TableCell>
            <TableCell>{item.total_volume}</TableCell>
            <TableCell>{item.market_cap}</TableCell>
            <TableCell>{item.price_change_percentage_24h}</TableCell>
            <TableCell className="text-right">{item.current_price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
  </Table>
  
  )
}

export default AssetTable
