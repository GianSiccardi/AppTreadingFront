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
import { Button } from '@/components/ui/button'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'

const WatchList = () => {
  const handleRemoveToWachtList=(value)=>{

  }
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
          {[1,1,1,1,1,1,1,1,1].map((item, index) => (
            <TableRow key={index}>
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
