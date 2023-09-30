import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Loader from "../../loader/loader"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Checkbox } from "../../ui/checkbox"
import { RegisterFormValues } from '@/lib/auth/typeRegisterForm';
import ErrorMessage from "../../common/ErrorMessage"
import useAuthContext from '@/context/AuthContext';

interface Props {}

function RegisterForm(props: Props) {

    const { t } = useTranslation();
    const [loading, setLoading] = useState(true);
    
    const authContext = useAuthContext() as AuthContextType;
    const { errors, setErrors, register, formLoading } = authContext;

    useEffect(() => {
      
      setTimeout(() => {
        setErrors([]);
        setLoading(false);
      }, 200); 
    }, []);
    const registerForm = useForm<RegisterFormValues>({
        defaultValues: {
            name:"",
            last_name:"",
            email: "",
            password:"",
            password_confirmation:"",
            terms: false,
        }
    });

    const onSubmitRegisterForm = async (values: RegisterFormValues) => {
      register(values);
    }

    return (
    <Card className="w-[350px] mx-auto">
        <CardHeader>
          <CardTitle >{t('register:register_title')}</CardTitle>
          <CardDescription className='font-clashLight'>{t('register:register_subtitle')}</CardDescription>
        </CardHeader>
        <CardContent className='w-full min-h-[200px]'>
        {(loading || formLoading) ? (
        <div className='w-full block'>
            <Loader />
        </div>
      ) : (
        <Form {...registerForm}>
            <form onSubmit={registerForm.handleSubmit(onSubmitRegisterForm)} className="space-y-8">
                <FormField
                control={registerForm.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='capitalize'>{t('register:name')}</FormLabel>
                    <FormControl>
                        <Input 
                        autoComplete="name" 
                        placeholder={t('register:name_placeholder')}
                        type='text'
                        {...field} />
                    </FormControl>
                    {errors.name  &&
                      <ErrorMessage 
                        message={errors.name[0]}
                      />
                    }
                    </FormItem>
                )}
                />
                <FormField
                control={registerForm.control}
                name="last_name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='capitalize'>{t('register:last_name')}</FormLabel>
                    <FormControl>
                        <Input 
                        autoComplete="last name"
                        placeholder={t('register:last_name_placeholder')}
                        type='text'
                        {...field} />
                    </FormControl>
                    {errors.last_name  &&
                      <ErrorMessage 
                        message={errors.last_name[0]}
                      />
                    }
                    </FormItem>
                )}
                />
                <FormField
                control={registerForm.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='capitalize'>{t('register:email')}</FormLabel>
                    <FormControl>
                        <Input 
                        autoComplete="email"
                        placeholder={t('register:email_placeholder')}
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
                control={registerForm.control}
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
                control={registerForm.control}
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
                <FormField
                control={registerForm.control}
                name="terms"
                render={({ field }) => (
                    <FormItem>
                    <div className="flex items-center gap-2 flex-wrap">
                    <FormControl>
                        <Checkbox id="terms"
                        required 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        />
                    </FormControl>
                    <FormLabel className='font-clashRegular flex items-center'>
                    <span>{t('register:terms')}&nbsp;</span> 
                    <Link to="/" className="underline text-blue-500">
                        {t('register:terms_link')}
                    </Link>
                    </FormLabel>
                    </div>
                    {errors.terms  &&
                      <ErrorMessage 
                        message={errors.terms[0]}
                      />
                    }
                    </FormItem>
                )}
                />
                <div className='space-y-3 w-full'>
                    <Button
                    disabled={(loading || formLoading)}
                    type='submit' variant="dark" className='text-white'>{t('common:register_button')}</Button>
                    <div className='flex flex-wrap gap-1'>
                        <small className='font-clashRegular text-xs'>{t('register:an_account')}</small>
                        <Link to="/login" className='text-xs font-clashMedium underline text-blue-500 transition-colors hover:text-primary'>{t('register:signin')}</Link>
                    </div>   
                </div>
            </form>
        </Form>
      )}
  
        </CardContent>
      </Card>
    )
}

export default RegisterForm
