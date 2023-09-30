import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
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
    password?: string[];
    password_confirmation?: string[];
};

function ResetPasswordForm() {

    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState<string | null>(null);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState("");
    const [searchParams] = useSearchParams();
    const { token } = useParams();

    const authContext = useAuthContext() as AuthContextType;
    const { csrf } = authContext;

    useEffect(() => {
        const emailFromSearchParams = searchParams.get('email');
            setEmail(emailFromSearchParams); // Affectez la valeur seulement si elle n'est pas null

    },[]);

    const resetPasswordForm = useForm<ResetPasswordFormValues>({
      defaultValues: {
        password:"",
        password_confirmation:""
      }
    });

  
    // const csrf = () => axios.get('/sanctum/csrf-cookie');
    const onSubmitResetPasswordForm = async (values: ResetPasswordFormValues) => {
        await csrf();
        setErrors({});
        setStatus("");
        try {
            const response = await axios.post('/reset-password', 
            {...values, 
            token,
            email
            });
            console.log(response.data.status)
            if(response.data.status === "Your password has been reset.") {
                setStatus(t('login:password_well_reset'));
                successToast(t('login:password_well_reset'));
            }
            resetPasswordForm.reset();
        } catch (e: any) {
            console.log(e);
            // errorToast(t('common:something_went_wrong'))
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
        <Form {...resetPasswordForm}>
            <form 
            onSubmit={resetPasswordForm.handleSubmit(onSubmitResetPasswordForm)} 
            className="space-y-8">
                <FormField
                control={resetPasswordForm.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='capitalize'>{t('register:password')}</FormLabel>
                    <FormControl>
                        <Input placeholder={t('register:password_placeholder')}
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
                <FormField
                control={resetPasswordForm.control}
                name="password_confirmation"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='capitalize'>{t('register:cpassword')}</FormLabel>
                    <FormControl>
                        <Input placeholder={t('register:cpassword_placeholder')}
                        type='password'
                        {...field} />
                    </FormControl>
                    {errors.password_confirmation  &&
                      <ErrorMessage 
                        message={errors.password_confirmation[0]}
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

export default ResetPasswordForm
