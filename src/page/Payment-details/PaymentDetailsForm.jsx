import React from 'react'
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import { DialogClose } from '@radix-ui/react-dialog';


const PaymentDetailsForm = () => {


    const form = useForm({
        resolver: "",
        defaultValues: {
            accountHolderName: "",
            isfc: "",
            confirmAccountNumber:"",
            accountnUmber: "",
            bankName: ""
        }
    })

    const onSubmit = (data) => {

    }
    return (
        <div className='px-10 py-2'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <FormField
                        control={form.control}
                        name="accountHolderName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre del titular de la cuenta</FormLabel>
                                <FormControl>
                                    <Input //name="accountHolderName"
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="Ingrese el nombre del titular de la cuenta" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="isfc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>IFSC code</FormLabel>
                                <FormControl>
                                    <Input
                                       // name="isfc"
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="isfc" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="accountNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Numero de cuenta</FormLabel>
                                <FormControl>
                                    <Input
                                      // name="accountNumber"
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="******56478" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
   <FormField
                control={form.control}
                name="confirmAccountNumber"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Confirmar Numero de cuenta</FormLabel>
                        <FormControl>
                            <Input 
                            name="isfc"
                            className="border w-full border-gray-700 p-5" 
                             placeholder="confirmar numero de cuetna" {...field} />
                        </FormControl>
                     
                        <FormMessage />
                    </FormItem>
                )}
            />

<FormField
                control={form.control}
                name="bankName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Banco</FormLabel>
                        <FormControl>
                            <Input 
                            name="isfc"
                            className="border w-full border-gray-700 p-5" 
                             placeholder="Nombre del banco" {...field} />
                        </FormControl>
                     
                        <FormMessage />
                    </FormItem>
                )}
            />
           <DialogClose className='w-full'>
            <Button type="submite" className="w-full py-5" >  Enviar</Button>
            </DialogClose>
                </form>
            </Form>
        </div>
    )
}

export default PaymentDetailsForm
