import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import { ActivityLogIcon, BookmarkIcon, DashboardIcon, ExitIcon, HomeIcon, PersonIcon } from '@radix-ui/react-icons'
import {DollarSign , CreditCardIcon, Wallet} from "lucide-react"
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const menu=[
    {
        name:"Home",path:"/",icon:<HomeIcon className='h-6 w-6'/>
    },
    {
        name:"Portafolio",path:"/portfolio",icon:<DashboardIcon className='h-6 w-6'/>
    },
    {
        name:"Watchlist",path:"/watchlist",icon:<BookmarkIcon className='h-6 w-6'/>
    },
    {
        name:"Wallet",path:"/wallet",icon:<Wallet className='h-6 w-6'/>
    },
    {
        name:"PaymentDetails", path:"/payment-details", icon:<DollarSign className='h-6 w-6'/>
    } ,
    {
        name:"Activity",path:"/activity",icon:<ActivityLogIcon className='h-6 w-6'/>
    },
    {
        name:"Withdrawal",path:"/withdrawal",icon:<CreditCardIcon className='h-6 w-6'/>
    },
    {
        name:"Profile",path:"/profile",icon:<PersonIcon className='h-6 w-6'/>
    },
    {
        name:"LogOut",path:"/",icon:<ExitIcon className='h-6 w-6'/>
    },
]


const Sidebar = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch()

    const handleLogout=()=>{
        dispatch(logout())
    }

 
  return (
    <div className='mt-10 space-y-5'> 
    {menu.map((item)=>(
        <div key={item.name}>
            <SheetClose className='w-full'>
            <Button variant="outline" className="flex items-center  gap-5 py-6 w-full" 
            onClick={()=>{
                navigate(item.path)
                if(item.name=="LogOut"){
                    handleLogout()
                }
            }}
            >
<span className='w-8'>{item.icon}</span>
<p>{item.name}</p>
        </Button>
            </SheetClose>

        </div>

    ))}
    <div className="">
        <SheetClose className='w-full'>

        </SheetClose>

    </div>
      
    </div>
  )
}

export default Sidebar
