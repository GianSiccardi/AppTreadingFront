import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { BookmarkFilledIcon, DotIcon } from '@radix-ui/react-icons'
import { BookmarkIcon } from 'lucide-react'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import TreadingForm from './TreadingForm'
import StockChart from '../Home/StockChart'

const StockDetails = () => {
  return (
<div className='p-5 mt-5'>
  <div className="flex justify-between">
    <div className="flex gap-5 items-center">
      <Avatar>
        <AvatarImage src='https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628' />
      </Avatar>
      <div className="flex flex-col gap-2">  
        <div className="flex items-center gap-2">
          <p>BTC</p>
          <DotIcon className='text-gray-400' />
          <p className='text-gray-400'>Bitcoin</p>
        </div>
        <div className="flex items-end gap-2 mt-2">  
          <p className='text-xl font-bold'>6544</p>
          <p className='text-red-600'>
            <span>-1354879878.578</span>
            <span>(-0.29803%)</span>
          </p>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <Button>
        {true? ( <BookmarkIcon className='h-6 w-6'/>):(
       <BookmarkIcon className='h-6 w-6'/>)}
       
      </Button>
      <Dialog>
  <DialogTrigger>
    <Button size="lg">Treads</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Cuanto quieres gastar?</DialogTitle>
      
    </DialogHeader>
    <TreadingForm/>
  </DialogContent>
</Dialog>

    </div>
  </div>
  <div className="mt-14">
  <StockChart/>
  </div>


</div>

  
  )
}

export default StockDetails
