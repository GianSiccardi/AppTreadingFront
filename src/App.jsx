import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './page/Navbar/Navbar'
import Home from './page/Home/Home'
import { Route ,Routes} from 'react-router-dom'
import Portfolio from './page/Portfolio/Portfolio'
import Activity from './page/Activity/Activity'
import Wallet from './page/Wallet/Wallet'
import withdrawal from './page/Withdrawal/Withdrawal'
import PaymentDetails from './page/Payment-details/Payment-details'
import StockDetails from './page/StockDetails/StockDetails'
import WatchList from './page/WatchList/WatchList'
import Profile from './page/Profile/Profile'
import SearchCoin from './page/Search/SearchCoin'
import Withdrawal from './page/Withdrawal/Withdrawal'
import Auth from './page/Auth/Auth'

function App() {


  return (
    <>
<Auth/>
{false&&    <div>
    <Navbar></Navbar>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/portfolio' element={<Portfolio />} />
  <Route path='/activity' element={<Activity />} />
  <Route path='/wallet' element={<Wallet />} />
  <Route path='/withdrawal' element={<Withdrawal />} />
  <Route path='/payment-details' element={<PaymentDetails />} />
  <Route path='/market/:id' element={<StockDetails />} />
  <Route path='/watchList' element={<WatchList />} />
  <Route path='/profile' element={<Profile />} />
  <Route path='/search' element={<SearchCoin />} />
  
</Routes>

    </div>}

    </>
  )
}

export default App
