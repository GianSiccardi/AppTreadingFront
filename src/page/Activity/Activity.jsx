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
import { getAllOrders } from '@/Store/Order/Actions'

const Activity = () => {

  const dispatch=useDispatch();
  const {order}=useSelector(store=>store)

  useEffect(()=>{
  dispatch(getAllOrders({jwt:localStorage.getItem("jwt")}))
  },[])
  return (
    <div className="p-10 lg:px-20">
    <h1 className='font-bold text-3xl pb-5'>Actividad</h1>
    <Table>
      
      <TableHeader>
        <TableRow>
          <TableHead className="p-5">
            Fecha y Hora
          </TableHead>
          <TableHead>Moneda</TableHead>
          <TableHead>Precio compra</TableHead>
          <TableHead>Precio venta</TableHead>
          <TableHead>Tipo de orden</TableHead>
         
          <TableHead>Valor</TableHead>

    
  
        </TableRow>
      </TableHeader>
      <TableBody>
          {order.orders.map((item, index) => (
            <TableRow key={index}>
                   <TableCell className="pl-5">
                  <p>2024/04</p>
                  <p>05:22:01</p>
                </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
              
                <Avatar className='w-8 h-8 flex items-center justify-center'>
           
                  <AvatarImage
                src={item.orderItem.coin.image}
 className='w-full h-full object-cover'
                  />
                </Avatar>
                <span>{item.orderItem.coin.name}</span>
              </TableCell>
              <TableCell>{item.orderItem.buyPrice}</TableCell>
              <TableCell>{item.orderItem.sellPrice}</TableCell>
              <TableCell>{item.orderType}</TableCell>
             
              <TableCell className="">{item.price}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
    </Table>
    </div>
  )
}

export default Activity
