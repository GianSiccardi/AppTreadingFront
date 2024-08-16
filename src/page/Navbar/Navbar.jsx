import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Sidebar from './Sidebar';
const Navbar = () => {
  return (
<div className='px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center'>
<div className='flex items-center gap-3'>
   
<Sheet>
  <SheetTrigger>
  <Button variant='ghost' size='icon' className='rounded-full h-14 w-14'>
  <DragHandleHorizontalIcon className='h-10 w-10'/>
</Button>
  </SheetTrigger>
  <SheetContent side='left' className='w-72 border-r-0 flex flex-col justify-center'>
    <SheetHeader>
   
    <SheetTitle>
  <div className="text-3xl flex justify-center items-center gap-1">
    <Avatar className="h-10 w-10 rounded-full overflow-hidden">
      <AvatarImage 
        src='https://cdn.pixabay.com/photo/2021/04/30/16/47/binance-logo-6219389_1280.png' 
        className="h-full w-full object-cover"
      />
    </Avatar>
    <div>
    <span className='font-bold text-green-500'>App</span>
    <span>Treading</span>
    </div>
  </div>
</SheetTitle>
    </SheetHeader>
    <Sidebar/>
  </SheetContent>
</Sheet>
<p className='text-sm lg:text-base cursor-pointer'>
  AppTreading
</p>
<div className="p-0 ml-9">
  <Button  className="flex items-center gap-3">
    <MagnifyingGlassIcon/>

    <span>Buscar</span>
  </Button>
</div>
</div>
<div >
  <Avatar>
    <AvatarFallback>
      G
    </AvatarFallback>
  </Avatar>
</div>
    </div>
  )
}

export default Navbar;
