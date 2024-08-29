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
import { getUserAssets } from '@/Store/Asset/Actions'


const Portfolio = () => {

  const dispatch=useDispatch();
  const {asset}=useSelector(store=>store)

  useEffect(()=>{
    dispatch(getUserAssets({jwt:localStorage.getItem("jwt")}))
  },[])
  return (
<div className="p-10 lg:px-20">
  <h1 className='font-bold text-3xl pb-5'>Portfolio</h1>
  <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="">
            Activo
        </TableHead>
        <TableHead>Precio</TableHead>
        <TableHead>UNIDAD</TableHead>
        <TableHead>CAMBIO</TableHead>
        <TableHead>CAMBIO(%)</TableHead>
        <TableHead>VOLUME</TableHead>



      </TableRow>
    </TableHeader>
    <TableBody>
      
        {asset.userAssests.map((item, index) => (// si no funciona agrega los [asset]
          <TableRow key={index}>
            <TableCell className="font-medium flex items-center gap-2">
              <Avatar className='w-8 h-8 flex items-center justify-center'>
                <AvatarImage
                  src={item.coin.image}
                  className='w-full h-full object-cover'
                />
              </Avatar>
              <span>{item.coin.name}</span>
            </TableCell>
            <TableCell>{item.coin.symbol.toUpperCase()}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.price_change_24h}</TableCell>
            <TableCell>{item.price_change_percentage_24h}</TableCell>
            <TableCell className="text-right">{item.coin.total_volume}</TableCell>
          </TableRow>
        ))}
      </TableBody>
  </Table>
  </div>
  )
}

export default Portfolio
