import React, { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"


import { Input } from "@/components/ui/input"

import { loginFormSchema } from '@/lib/zod'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Loader from '../loader/loader';
import axios from '@/api/axios'
import ErrorMessage from '../common/ErrorMessage';
interface Props {}
import { LoginFormValues } from '@/lib/typeLoginForm';
import useAuthContext from '@/context/AuthContext';

function LoginForm(props: Props) {
    const {} = props

    const { t } = useTranslation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    // const [errors, setErrors] = useState<{ [key: string]: string }>({});
    // const csrf = () => axios.get('/sanctum/csrf-cookie');

    const authContext = useAuthContext() as AuthContextType;
    const { user, errors, login, formLoading } = authContext;
    useEffect(() => {
      // Chargez vos données ou effectuez d'autres opérations asynchrones ici
      // Une fois le chargement terminé, mettez setLoading(false) pour masquer le loader
      setTimeout(() => {
        setLoading(false);
      }, 600); // Par exemple, après 2 secondes
    }, []);

    // const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    //     resolver: zodResolver(loginFormSchema),
    //     defaultValues: {
    //         email: "",
    //         password:""
    //     }
    // })
    const loginForm = useForm<LoginFormValues>({
      defaultValues: {
        email:"",
        password:"",
      }
    });

    const onSubmitLoginForm = async (values: LoginFormValues) => {
      setLoading(true);
        // console.log(values);
        // await csrf();
        // try {
        //   setLoading(true);
        //   await axios.post('/login', values);
        //   values.email="";
        //   values.password="";
        //   navigate("/");
        // } catch (e: any) {
        //   console.log(e);
        //   if(e.response.status === 422) {
        //     setErrors(e.response.data.errors);
        //   }    
        // }
        login({values});
        setLoading(false);
    }


    return (
        <Card className="w-[350px] mx-auto">
        <CardHeader>
          <CardTitle >{t('login:login_title')}</CardTitle>
          <CardDescription className='font-clashLight'>{t('login:login_subtitle')}</CardDescription>
        </CardHeader>
        <CardContent className='w-full min-h-[200px]'>
        {(loading || formLoading) ? (
        <div className='w-full block'>
            <Loader />
        </div> // Affichez le loader tant que loading est true
      ) : (
        <Form {...loginForm}>
            <form onSubmit={loginForm.handleSubmit(onSubmitLoginForm)} className="space-y-8">
                <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='capitalize'>{t('login:email')}</FormLabel>
                    <FormControl>
                        <Input className='' placeholder={t('login:email_placeholder')}
                        type='email'
                        {...field} />
                    </FormControl>
                    {errors.email  &&
                      <ErrorMessage 
                        message={errors.email[0]}
                      />
                    }
                    
                    </FormItem>
                )}
                />
                <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='capitalize'>{t('login:password')}</FormLabel>
                    <FormControl>
                        <Input placeholder={t('login:password_placeholder')}
                        type='password'
                        {...field} />
                    </FormControl>
                    {errors.password  &&
                      <ErrorMessage 
                        message={errors.password[0]}
                      />
                    }
                    </FormItem>
                )}
                />
                <div className='space-y-3 w-full'>
                    <Button disabled={formLoading} type='submit' variant="dark" className='text-white disabled:bg-gray-400 disabled:text-customBlack'>{t('common:login_button')}</Button>
                    <div className='flex flex-wrap gap-1'>
                        <small className='font-clashRegular text-xs'>{t('login:no_account')}</small>
                        <Link to="/register" className='text-xs font-clashMedium underline text-blue-500 transition-colors hover:text-primary'>{t('login:signup')}</Link>
                    </div>
                    
                </div>
            </form>
        </Form>
      )}
  
        </CardContent>
      </Card>
    )
}

export default LoginForm
