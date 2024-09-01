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
import { Button } from '@/components/ui/button'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addItemTOwatchlist, getUserWatchlist } from '@/Store/WatchList/Actions'
import { existInWatchList } from '@/utils/existInWatchList'

const WatchList = () => {
  const{watchlist}=useSelector(store=>store)
  const dispatch=useDispatch()
 
 
  const handleRemoveToWachtList=(value)=>{
    dispatch(addItemTOwatchlist({coindId:value?.id,jwt:localStorage.getItem("jwt")}))

  }


  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
        dispatch(getUserWatchlist(jwt));
    } else {
        console.error('No JWT token found');
    }
}, [dispatch]);
  return (
    <div className="p-10 lg:px-20">
    <h1 className='font-bold text-3xl pb-5'>Guardados</h1>
    <Table className="border-x">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="py-5">
              Moneda
          </TableHead>
          <TableHead>Simbolo</TableHead>
          <TableHead>Volumen</TableHead>
          <TableHead>Capitalizacion de mercado</TableHead>
          <TableHead>24h</TableHead>
          <TableHead>Precio</TableHead>
          <TableHead className="text-right text-red-600">Eliminar</TableHead>

  
  
  
        </TableRow>
      </TableHeader>
      <TableBody>
          {watchlist.items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className='w-8 h-8 flex items-center justify-center'>
                  <AvatarImage
                    src={item.image}
                    className='w-full h-full object-cover'
                  />
                </Avatar>
                <span>{item.name}</span>
              </TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.total_Volume}</TableCell>
              <TableCell>{item.market_cap}</TableCell>
              <TableCell>${item.prince_change_percentage_24h}</TableCell>
              <TableCell>{item.current_price}</TableCell>
              <TableCell className="text-right">
                <Button size="icon"  variant="outline" onClick={()=>handleRemoveToWachtList(item.id)}>
                  <BookmarkFilledIcon className='w-6 h-6'></BookmarkFilledIcon>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
    </div>
  )
}

export default WatchList
