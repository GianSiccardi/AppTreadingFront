import {useState} from 'react'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

import { Button } from '@/components/ui/button'
import { DialogClose } from '@radix-ui/react-dialog';


const AccountVarificationForm = () => {

    const [value,setValue]=useState('');


const handleSumbit =()=>{
    console.log(value)
}
    return (
        <div className='flex justify-center'>
            <div className='space-y-5 mt-10 w-full'>
                <div className="flex justify-between items-center">
                    <p>Email:</p>
                    <p>gian@gmail.com</p>
                    <Dialog>
                        <DialogTrigger>
                            <Button>Enviar OTP</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Ingresa OTP</DialogTitle>

                            </DialogHeader>
                            <div className="py-5 flex gap-10 justify-center items-center">
                                <InputOTP
                                value={value}
                                onChange={()=>setValue(value)}
                                maxLength={6}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                                <DialogClose>
                                <Button
                                onClick={handleSumbit}
                                className="w-[10rem]">Enviar </Button>

                                </DialogClose>
                            </div>
                        </DialogContent>
                    </Dialog>

                </div>

            </div>

        </div>
    )
}

export default AccountVarificationForm 
