import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { BookmarkFilledIcon, DotIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { useSelector } from 'react-redux'

const TreadingForm = () => {
const[orderType,setOrderType]=useState("BUY");
const [amount,setAmount]=useState(0);
const [Quantity,setQuantity]=useState(0)
const{coin}=useSelector(store=>store);



    const handleChange = (e) => {
   const amount=e.target.value
   setAmount(amount)
   const volume=calculateBuyCost(amount,coin.coinDetails.market_data.current_price.usd)
    }
    return (
        <div className='space-y-10 p-5'>
            <div className="">
                <div className="flex gap-4 items-center justify-between">
                    <Input
                        className="py-7 foucs:outline-none"
                        placeholder="Ingresa monto"
                        onChange={handleChange}
                        type="number"
                        name="amount" />
                    <div className="">
                        <p className='border text-2xl flex justify-center items-center w-36 h-14 rounded-md'>4563</p>
                    </div>
                </div>
                {true &&
                    <h1 className='text-red-600 text-center pt-4'>Saldo insuficiente en tu billetera </h1>}
            </div>

            <div className="">
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
            </div>
            <div className="flex  items-center justify-between">
                <p>Tipo de order</p>
                <p>Orden de mercado</p>
            </div>

            <div className="flex items-center justify-between">
                <p>{orderType=="BUY"?"Saldo disponible":"Cantidad disponible"}</p>
                <p>
                {orderType=="BUY"?9000:20.0}   
                </p>
            </div>
            <div className="">
                <Button className={`w-full py-6 ${orderType=="SELL" ?"bg-red-600 text-white":"" }`}>
                    {orderType}
                </Button>
                <Button 
                variant="links"
                className="w-full mt-5 text-xl"
                onClick={()=>setOrderType(orderType=="BUY"?"SELL":"BUY")}>
                    {orderType=="BUY"? "Or Sell":"Or Buy"}
                </Button>
            </div>
        </div>
    )
}

export default TreadingForm
