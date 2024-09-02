import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { BookmarkFilledIcon, DotIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { getUserWallet } from '@/Store/Wallet/Actions'
import { getAssetDetails } from '@/Store/Asset/Actions'
import { payOrder } from '@/Store/Order/Actions'

const TreadingForm = () => {
const[orderType,setOrderType]=useState("BUY");
const [amount,setAmount]=useState(0);
const [quantity,setQuantity]=useState(0)
const{coin ,wallet}=useSelector(store=>store);
const asset = useSelector(state => state.asset);
const dispatch=useDispatch();

useEffect(() => {
    console.log("Initial Asset State:", asset);
}, []);

    const handleChange = (e) => {
   const amount=e.target.value
   setAmount(amount)
   const volume=calculateBuyCost(
    amount,coin.coinDetails.market_data.current_price.usd)

    setQuantity(volume);
    }


    const calculateBuyCost=(amount,price)=>{
       let volume=amount /price

       let decimalPlaces=Math.max(2,price.toString().split(".")[0].length)

       return volume.toFixed(decimalPlaces);
    }

    useEffect(() => {
        const jwt = localStorage.getItem("jwt");
        const coinId = coin.coinDetails?.id; 
    
        if (jwt) {
            dispatch(getUserWallet(jwt));
      
            if (coinId) {
                dispatch(getAssetDetails({
                    coinId,
                    jwt
                }));
            } else {
                console.error("Coin ID is not available");
            }
        } else {
            console.error("JWT Token not found in localStorage");
        }
    }, [dispatch, coin.coinDetails?.id]); // Incluye las dependencias necesarias
    
    const handleBuyCripto = () => {
        const jwt = localStorage.getItem("jwt");
        const orderData = {
            coinId: coin.coinDetails?.id,
            quantity,
            orderType
        };
    
       console.log("token verificado")
        dispatch(payOrder(jwt, orderData, amount))
            .then(response => {
                console.log("Pay Order Response:", response);
            })
            .catch(error => {
                console.error("Pay Order Error:", error);
            });
    };

    
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
                        <p className='border text-2xl flex justify-center items-center w-36 h-14 rounded-md'>
                            {quantity}</p>
                    </div>
                </div>
                {true &&
                    <h1 className='text-red-600 text-center pt-4'>Saldo insuficiente en tu billetera </h1>}
            </div>

            <div className="">
            <div className="flex gap-5 items-center">
      <Avatar>
        <AvatarImage src={coin.coinDetails?.image.large}/>
      </Avatar>
      <div className="flex flex-col gap-2">  
        <div className="flex items-center gap-2">
        <p className='text-gray-400'>{coin.coinDetails?.symbol?.toUpperCase()}</p>
        <DotIcon className='text-gray-400' />
          <p className='text-gray-400'>{coin.coinDetails?.name}</p>
        </div>
        <div className="flex items-end gap-2 mt-2">  
          <p className='text-xl font-bold'>{coin.coinDetails?.market_data.current_price.usd}</p>
          <p className='text-red-600'>
            <span>{coin.coinDetails.market_data.price_change_24h}</span>
            <span>(%{coin.coinDetails.market_data.price_change_percentage_24h})</span>
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
                {orderType=="BUY"?"$"+ wallet.userWallet.balance:(asset.assetDetails?.quantity|| 0)}   
                </p>
            </div>
            <div className="">
                <Button 
                onClick={handleBuyCripto}
                className={`w-full py-6 ${orderType=="SELL" ?"bg-red-600 text-white":"" }`}>
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
