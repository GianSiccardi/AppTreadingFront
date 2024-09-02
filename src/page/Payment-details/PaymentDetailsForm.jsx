import React from 'react'
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import { DialogClose } from '@radix-ui/react-dialog';
import { useDispatch } from 'react-redux';
import { addPaymentDetails } from '@/Store/WithDrawal/Actions';


const PaymentDetailsForm = () => {
   const dispatch=useDispatch();

    const form = useForm({
        resolver: "",
        defaultValues: {
            accountHolderName: "",
            ifsc: "",
            confirmAccountNumber:"",
            accountNumber: "",
            bankName: ""
        }
    })
    const onSubmit = (data) => {
        console.log("Formulario enviado con los datos:", data);
    
        const jwt = localStorage.getItem("jwt");
    
        if (!jwt) {
            console.error("JWT no encontrado en el localStorage. No se puede proceder con la solicitud.");
            return; 
        }
    
        dispatch(addPaymentDetails({
            paymentDetails: data,
            jwt: jwt
        }));
    };
    
    
    
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
                        name="cvu"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>CVU</FormLabel>
                                <FormControl>
                                    <Input
                                       // name="isfc"
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="CVU" {...field} />
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
            <Button type="submit" className="w-full py-5" >  Enviar</Button>
            </DialogClose>
                </form>
            </Form>
        </div>
    )
}

export default PaymentDetailsForm
