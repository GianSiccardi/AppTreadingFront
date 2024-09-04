import React from 'react'

import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import { DialogClose } from '@radix-ui/react-dialog';
import { useDispatch } from 'react-redux';
import { login } from '@/Store/Auth/Action';
import { useNavigate } from 'react-router-dom';


const SigninForm = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
  const form = useForm({
    resolver: "",
    defaultValues: {
       
        email: "",
        password:"",
     
    }
})

const onSubmit = (data) => {
    console.log("Form submitted", data); 
    dispatch(login({ data, navigate }));

}
return (
    <div className='px-10 py-2'>
         <h1 className='text-xl font-bold text-center pb-4'>Ingresar</h1>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                  
                            <FormControl>
                                <Input
                                   // name="isfc"
                                    className="border w-full border-gray-700 p-5"
                                    placeholder="Ingresa tu email" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                        
                            <FormControl>
                                <Input
                                   type="password" 
                                    className="border w-full border-gray-700 p-5"
                                    placeholder="Contraseña" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

<Button type="submit" className="w-full py-5"> Ingresar</Button>
            </form>
        </Form>
    </div>
)
}

export default SigninForm
