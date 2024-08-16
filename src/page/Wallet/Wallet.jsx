import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DialogContent, DialogHeader } from '@/components/ui/dialog'
import { DialogTrigger, Dialog, DialogTitle } from '@radix-ui/react-dialog'
import { ReloadIcon } from '@radix-ui/react-icons'
import { CopyIcon, DollarSign, ShuffleIcon, UploadIcon, WalletIcon } from 'lucide-react'
import React from 'react'
import TopupForm from './TopupForm'
import WithDrawlForm from '../Withdrawal/WithDrawlForm'
import TransferForm from './TransferForm'


const Wallet = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className="pt-10 w-full lg:w-[50%]"> {/* Corregido a 'lg:w-[60%]' */}
        <Card>
          <CardHeader className="pb-9">
            <div className='flex justify-between items-center'>
              <div className="flex items-center gap-5">
                <WalletIcon size={30}></WalletIcon>
                <div>
                  <CardTitle className="text-2xl">Mi billetera</CardTitle>
                  <div className='flex items-center gap-2'></div>
                  <p className='text-gray-200 text-sm'>
                    #A475
                  </p>
                  <CopyIcon size={12} className='cursor-pointer hover:text-slate-300'></CopyIcon>
                </div>
              </div>
              <ReloadIcon className='w-6 h-6 cursor-pointer hover:text-gray-400'></ReloadIcon>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center pb-5 pt-5">
              <DollarSign></DollarSign>
              <span className='text-2xl font-semibold'>2000</span>
            </div>

            <div className="flex gap-7 mt-5">
              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer 
                                  flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">

                    <UploadIcon></UploadIcon>
                    <span className="text-sm mt-2">Recargar</span>
                  </div>

                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Recargar tu saldo!
                    </DialogTitle>
                  </DialogHeader>
                  <TopupForm></TopupForm>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer 
                                  flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">

                    <UploadIcon></UploadIcon>
                    <span className="text-sm mt-2">Retirar</span>
                  </div>

                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Monto a retirar!
                    </DialogTitle>
                  </DialogHeader>
                  <WithDrawlForm></WithDrawlForm>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer 
                                  flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">

                    <ShuffleIcon></ShuffleIcon>
                    <span className="text-sm mt-2">Transferir</span>
                  </div>

                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className='text-center text-xl'>
                      Transferir a otra billetera
                    </DialogTitle>
                  </DialogHeader>
                  <TransferForm></TransferForm>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Wallet
