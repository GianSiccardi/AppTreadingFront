import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { BookmarkFilledIcon, DotIcon } from '@radix-ui/react-icons'
import { BookmarkIcon } from 'lucide-react'
import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCoinDetails } from '@/Store/Coin/Action'
import { addItemTOwatchlist, getUserWatchlist } from '@/Store/WatchList/Actions'
import { existInWatchList } from '@/utils/existInWatchList'



const StockDetails = () => {
  const { coin,watchlist} = useSelector((store) => store);


  const { coinId } = useParams(); 
  const dispatch = useDispatch();

  console.log('Coin ID from URL:', coinId);
 
  const handleAddToWatchlist = () => {


const id=coin.coinDetails?.id
    
      const jwt = localStorage.getItem("jwt");
    
  
    if (coinId && jwt) {
        dispatch(addItemTOwatchlist(id,jwt));
    } else {
        console.error('Either Coin ID or JWT is missing');
    }
}


 /* const handleAddToWatchlist = () => {
    dispatch(addItemTOwatchlist(coin.coinDetails?.id, localStorage.getItem("jwt")));
  };*/

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (coinId) {
        dispatch(fetchCoinDetails({ coinId, jwt }));
    }
    if (jwt) {
        dispatch(getUserWatchlist( jwt ));
    } else {
        console.error('JWT Token not found in localStorage');
    }
}, [coinId]);

  

  const item = coin.coinDetails;

  return (
    <div className='p-5 mt-5'>
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <Avatar>
            <AvatarImage className="w-12 h-12 object-cover" src={coin.coinDetails?.image.large} />
          </Avatar>
          <div className="flex flex-col gap-2">  
            <div className="flex items-center gap-2">
              <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
              <DotIcon className='text-gray-400' />
              <p className='text-gray-400'>{coin.coinDetails?.name}</p>
            </div>
            <div className="flex items-end gap-2 mt-2">  
              <p className='text-xl font-bold'>${coin.coinDetails?.market_data.current_price.usd}</p>
              <p className='text-red-600'>
                <span>-{coin.coinDetails?.market_data.market_cap_change_24h}</span>
                <span>(-{coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button onClick={handleAddToWatchlist}>
            {existInWatchList(watchlist.items, item, coin.coinDetails)
              ? (<BookmarkFilledIcon className='h-6 w-6' />)
              : (<BookmarkIcon className='h-6 w-6' />)}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size="lg">Treads</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Cuanto quieres gastar?</DialogTitle>
              </DialogHeader>
              <TreadingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-14">
        <StockChart coinId={coinId} />
      </div>
    </div>
  );
}  

export default StockDetails
