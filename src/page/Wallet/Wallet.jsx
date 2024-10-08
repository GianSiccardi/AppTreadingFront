import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DialogContent, DialogHeader } from '@/components/ui/dialog'
import { DialogTrigger, Dialog, DialogTitle } from '@radix-ui/react-dialog'
import { ReloadIcon, UpdateIcon } from '@radix-ui/react-icons'
import { CopyIcon, DollarSign, ShuffleIcon, UploadIcon, WalletIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import TopupForm from './TopupForm'
import WithDrawlForm from '../Withdrawal/WithDrawlForm'
import TransferForm from './TransferForm'
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import { useDispatch, useSelector } from 'react-redux'
import { depositMoney, getUserWallet } from '@/Store/Wallet/Actions'
import { useLocation, useNavigate } from 'react-router-dom'


function useQuery(){
  return new URLSearchParams(useLocation().search);
}

const Wallet = () => {
  const dispatch = useDispatch();
  const wallet = useSelector(store => store.wallet);
  

  console.log("Conectando a la store", wallet);

  const query = useQuery();
  const orderId = query.get("order_id");
  const paymentId = query.get("payment_id");
  const stripePaymentId = query.get("stripe_payment_id");
  const navigate = useNavigate();


  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Texto copiado al portapapeles:', text);
            
        })
        .catch((error) => {
            console.error('Error al copiar al portapapeles:', error);
        });
};
  const handleFetchUserWalle = () => {
    console.log("Intentando despachar getUserWallet");
    dispatch(getUserWallet(localStorage.getItem("jwt")));
  };

  const handleFetchWalletTransaction = () => {
    console.log("Intentando despachar getUserWallet (Transacciones)");
    dispatch(getUserWallet(localStorage.getItem("jwt")));
  };

  useEffect(() => {
    console.log("Despachando fetchUserWallet");
    handleFetchUserWalle();
    handleFetchWalletTransaction();
  }, [dispatch]);

  useEffect(() => {
    if (orderId) {
      console.log("Depósito de dinero en curso");
      dispatch(depositMoney({
        jwt: localStorage.getItem("jwt"),
        orderId,
        paymentId: stripePaymentId || paymentId,
        navigate
      }));
    }
  }, [orderId, paymentId, stripePaymentId]);


  console.log("Contenido de wallet:", wallet);
  console.log("Contenido de wallet.transactions:", wallet.transactions);

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
                  #{wallet.userWallet?.id || "ID no disponible"}                  </p>
                  <CopyIcon 
                    size={12} 
                    className='cursor-pointer hover:text-slate-300' 
                    onClick={() => copyToClipboard(wallet.userWallet?.id || "ID no disponible")}
                />
                </div>
              </div>
              <ReloadIcon onClick={handleFetchUserWalle} className='w-6 h-6 cursor-pointer hover:text-gray-400'></ReloadIcon>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center pb-5 pt-5">
              <DollarSign></DollarSign>
              <span className='text-2xl font-semibold'>  {wallet.userWallet.balance !== null && wallet.userWallet.balance !== undefined
    ? wallet.userWallet.balance
    : 0}</span>
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
                    <DialogTitle className='text-xl font-bold'>
                      Recargar tu saldo!
                    </DialogTitle>
                  </DialogHeader>
                  <TopupForm></TopupForm>
                </DialogContent>
              </Dialog>

              <Dialog  >
                <DialogTrigger>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer 
                                  flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">

                    <UploadIcon></UploadIcon>
                    <span className="text-sm mt-2">Retirar</span>
                  </div>

                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className='text-xl font-bold'>
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
                    <DialogTitle className='text-center text-xl font-bold '>
                      Transferir a otra billetera
                    </DialogTitle>
                  </DialogHeader>
                  <TransferForm></TransferForm>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        <div className="py-5 pt-10">
          <div className="flex gap-2 items-center pb-5">
            <h1 className="text-2xl font-semibold">Historial</h1>
            <UpdateIcon className='h-7 w-7 p-0 cursor-pointer hover:text-gray-400' />

          </div>


        </div>
<div className="space-y-5">
    {wallet.userWallet && wallet.userWallet.transactions && wallet.userWallet.transactions.length > 0 ? (
        wallet.userWallet.transactions.map((item, i) => (
            <div key={i}>
                <Card className="lg:w-[50%] px-5 flex justify-between items-center p-3">
                    <div className="flex items-center gap-5">
                        <Avatar onClick={handleFetchWalletTransaction}>
                            <AvatarFallback>
                                <ShuffleIcon className='' />
                            </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <h1>{item.purpose || item.walletTransactionType}</h1>
                            <p className='text-sm text-gray-500'>{item.date}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-green-500'>{item.amount}</p>
                    </div>
                </Card>
            </div>
        ))
    ) : (
        <p>No hay transacciones disponibles.</p>
    )}
</div>


      
        </div>

      </div>
 
  )
}

export default Wallet