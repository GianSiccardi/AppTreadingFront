import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { VerifiedIcon } from 'lucide-react'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import AccountVarificationForm from './AccountVarificationForm '

const Profile = () => {

  const handleEnableTwoStepVerification=()=>{
    
  }
  return (
    <div className='flex flex-col items-center mb-5 '>
      <div className='pt-10 w-full lg:w-[60%]'>
        <Card>
          <CardHeader>
            <CardTitle>Tu informacion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className='space-y-7'>
                <div className="flex">
                  <p className='w-[9rem]'>Email: </p>
                  <p className='text-gray-500'>giansica@gmail.com</p>
                </div>
                <div className="flex">
                  <p className='w-[9rem]'>Nombre: </p>
                  <p className='text-gray-500'>Gian Siccardi</p>
                </div>
                <div className="flex">
                  <p className='w-[9rem]'>Nacimiento: </p>
                  <p className='text-gray-500'>15/12/00</p>
                </div>
                <div className="flex">
                  <p className='w-[9rem]'>Nacionalidad: </p>
                  <p className='text-gray-500'>Argentino</p>
                </div>
              </div>

              <div className='space-y-7'>
                <div className="flex">
                  <p className='w-[9rem]'>Email: </p>
                  <p className='text-gray-500'>giansica@gmail.com</p>
                </div>
                <div className="flex">
                  <p className='w-[9rem]'>Nombre: </p>
                  <p className='text-gray-500'>Gian Siccardi</p>
                </div>
                <div className="flex">
                  <p className='w-[9rem]'>Nacimiento: </p>
                  <p className='text-gray-500'>15/12/00</p>
                </div>
                <div className="flex">
                  <p className='w-[9rem]'>Nacionalidad: </p>
                  <p className='text-gray-500'>Argentino</p>
                </div>
              </div>

            </div>
            
            
          </CardContent>
        </Card>

        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className='flex items-center gap-3'>
                <CardTitle>Verificacion</CardTitle>
                {true ? <Badge className="space-x-2 text-white bg-green-600" >
                  <VerifiedIcon />
                  <span>
                    Habilitado
                  </span>


                </Badge> :
                  <Badge className="bg-red-500">
                    Desahabilitado</Badge>

                }</div>


            </CardHeader>
            <CardContent>
              <div className="">
                <Dialog>
                  <DialogTrigger>
                    <Button>
                      Habilite la verificacion two step
                    </Button>

                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Verifica tu cuenta</DialogTitle>
                   
                    </DialogHeader>
                    <AccountVarificationForm handleSumbit={handleEnableTwoStepVerification}/>
                  </DialogContent>
                </Dialog>

              </div>
            </CardContent>

          </Card>
        </div>

      </div>

    </div>
  )
}

export default Profile
