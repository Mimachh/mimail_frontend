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
import useAuthContext from '@/context/AuthContext';
import axios from '@/api/axios';
import { successToast } from '@/lib/toast/successToast';
import { errorToast } from '@/lib/toast/errorToast';


type FormErrors = {
    email?: string[];
};

function ForgotPasswordForm() {

    const { t } = useTranslation();
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState("");

    const authContext = useAuthContext() as AuthContextType;
    const { csrf } = authContext;

    useEffect(() => {
      setTimeout(() => {
        setErrors({});
        setLoading(false);
      }, 600);
    }, []);

    const forgotPasswordForm = useForm<ForgotPasswordFormValues>({
      defaultValues: {
        email:"",
      }
    });

  
    // const csrf = () => axios.get('/sanctum/csrf-cookie');
    const onSubmitForgotPasswordForm = async (values: ForgotPasswordFormValues) => {
        await csrf();
        setErrors({});
        setStatus("");
        try {
            const response = await axios.post('/forgot-password', values);
            if(response.data.status === "We have emailed your password reset link.") {
                setStatus(t('login:confirm_link_sent'));
                successToast(t('login:confirm_link_sent'));
            }
            forgotPasswordForm.reset();
        } catch (e: any) {
            console.log(e);
            errorToast(t('common:something_went_wrong'))
            if(e.response.status === 422) {
              setErrors(e.response.data.errors);
            }    
        }
    }


    return (
        <Card className="w-[350px] mx-auto">
        <CardHeader className='pb-2'>
          <CardTitle >{t('login:forgot_password')}</CardTitle>
          <CardDescription className='font-clashLight'>{t('login:send_link_to_renew_password')}</CardDescription>
        </CardHeader>
        <CardContent className='w-full min-h-[200px]'>
        {loading ? (
        <div className='w-full block'>
            <Loader />
        </div> // Affichez le loader tant que loading est true
      ) : (
        <>
        {status && 
        <div className='bg-green-600 m-2 p-2 rounded-xl text-sm text-white'>
            {status}
        </div>
        }
        <Form {...forgotPasswordForm}>
            <form 
            onSubmit={forgotPasswordForm.handleSubmit(onSubmitForgotPasswordForm)} 
            className="space-y-8">
                <FormField
                control={forgotPasswordForm.control}
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
                <div className='space-y-3 w-full'>
                    <Button disabled={loading} type='submit' variant="dark" className='text-white disabled:bg-gray-400 disabled:text-customBlack'>{t('common:send')}</Button>
                    <div className='flex flex-wrap gap-1'>
                        <small className='font-clashRegular text-xs'>{t('login:no_account')}</small>
                        <Link to="/register" className='text-xs font-clashMedium underline text-blue-500 transition-colors hover:text-primary'>{t('login:signup')}</Link>
                    </div>
                    
                </div>
            </form>
            <Link 
            to="/login" 
            className='block pt-3 text-xs font-clashMedium underline text-blue-500 transition-colors hover:text-primary'
            >{t('login:login_title')}?</Link>
        </Form>
        </>

      )}
  
        </CardContent>
      </Card>
    )
}

export default ForgotPasswordForm
