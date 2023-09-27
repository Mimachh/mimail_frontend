import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
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
  } from "@/components/ui/form"


import { Input } from "@/components/ui/input"

import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Loader from '../../loader/loader';
import ErrorMessage from '../../common/ErrorMessage';
interface Props {}
import { LoginFormValues } from '@/lib/auth/typeLoginForm';
import useAuthContext from '@/context/AuthContext';

function LoginForm(props: Props) {
    const {} = props

    const { t } = useTranslation();
    const [loading, setLoading] = useState(true);
    const authContext = useAuthContext() as AuthContextType;
    const { user, errors, login, formLoading } = authContext;
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 600); // Par exemple, après 2 secondes
    }, []);

    const loginForm = useForm<LoginFormValues>({
      defaultValues: {
        email:"",
        password:"",
      }
    });

    const onSubmitLoginForm = async (values: LoginFormValues) => {
      login({values});
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
