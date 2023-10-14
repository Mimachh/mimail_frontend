import axios from '@/api/axios';
import ErrorMessage from '@/components/common/ErrorMessage';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import useAuthContext from '@/context/AuthContext';
import { PasswordChangeValues } from '@/lib/auth/dashboard/typePasswordChangeForm';
import { ProfileSettingsProps } from '@/lib/auth/dashboard/typeProfileSettingsProps';
import { errorToast } from '@/lib/toast/errorToast';
import { successToast } from '@/lib/toast/successToast';
import { CheckCircle2, Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface Props {}

type FormErrors = {
  password?: string[];
  password_confirmation?: string[];
  current_password?: string[];
};

function UpdatePassword(props: ProfileSettingsProps) {
    const {} = props
    const { t } = useTranslation();
    const [errors, setErrors] = useState<FormErrors>({});
    const { formLoading, setFormLoading, csrf, user } = props;

    const { getUser } = useAuthContext() as AuthContextType;

    const [isPasswordsMatches, setIsPasswordsMatches] = useState(false);

    useEffect(() => {
      setErrors({});
    }, [])

    const passwordChangeForm = useForm<PasswordChangeValues>({
      defaultValues: {
        current_password: "",
        password: "",
        password_confirmation: "",
      },
    });

    const { handleSubmit, reset, control } = passwordChangeForm; // Utilisez passwordChangeForm ici

    const watchedPassword = useWatch({
      name: "password",
      control,
    });
    const watchedConfirmPassword = useWatch({
      name: "password_confirmation",
      control,
    });

    useEffect(() => {
      if (watchedPassword.length > 0 && watchedConfirmPassword.length > 0){
        if(watchedPassword === watchedConfirmPassword) {
          setIsPasswordsMatches(true);
        } else {
          setIsPasswordsMatches(false);
        }
      } else {
        setIsPasswordsMatches(false);
      } 
    }, [watchedPassword, watchedConfirmPassword]);

    const onSubmitPersonnalInformationForm = async (values: PasswordChangeValues) => {
      if(isPasswordsMatches) {
        setFormLoading(true);
        await csrf();
        setErrors({});
        try {
          const response = await axios.put(`/api/user/${user.id}/password-update`, values);
          console.log(response)
          if(response.data.message === 'Mot de passe modifié') {
            successToast(t('profile:password_update_success'))
          }
          getUser();
          setErrors({});
        } catch (error: any) {
          errorToast(t('common:something_went_wrong'))
          console.log(error);
          if(error.response.status === 422) {
            setErrors(error.response.data.errors);
          }  
  
          setTimeout(() => {
            setErrors({});

          }, 5000);
        } finally {
          setFormLoading(false);
          reset();
        }
      } 
   
    };


    return (
      <Form {...passwordChangeForm}>
        <form onSubmit={handleSubmit(onSubmitPersonnalInformationForm)} className="md:col-span-2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="col-span-full">
              <FormField
                control={control}
                name="current_password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='capitalize'>{t('profile:current_password')}</FormLabel>
                    <FormControl>
                        <Input placeholder={t('profile:current_password_placeholder')}
                        type='password'
                        {...field} 
                        />
                    </FormControl>
                    {errors.current_password  &&
                      <ErrorMessage 
                        message={errors.current_password[0]}
                      />
                    }
                    </FormItem>
                )}
                />
            </div>
            <div className="col-span-full">
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='capitalize'>{t('profile:new_password')}</FormLabel>
                    <FormControl>
                        <Input placeholder={t('profile:new_password_placeholder')}
                        type='password'
                        {...field} 
                        />
                    </FormControl>
                    {errors.password  &&
                      <ErrorMessage 
                        message={errors.password[0]}
                      />
                    }
                    </FormItem>
                )}
              />
            </div>
            <div className="col-span-full">
                <FormField
                control={control}
                name="password_confirmation"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='capitalize flex items-center gap-2'>
                      {t('profile:confirm_password')}
                      {isPasswordsMatches && 
                        <CheckCircle2 className='h-5 w-5 text-green-500'/>        
                      }
                    </FormLabel>
                    <FormControl>
                        <Input placeholder={t('profile:confirm_password')}
                        type='password'
                        {...field} 
                        />
                    </FormControl>
                    {errors.password_confirmation  &&
                      <ErrorMessage 
                        message={errors.password_confirmation[0]}
                      />
                    }
                    </FormItem>
                )}
              />
            </div>
          </div>

          <div className="mt-8 flex">
              <Button disabled={formLoading || !isPasswordsMatches} type='submit' variant="yellow" className='text-customBlack disabled:bg-customBlack disabled:text-customYellow'>
                {formLoading ? (
                  <Loader2 className="animate-spin"/>
                ) : (
                  <span>{t('common:save')}</span>
                )}
              </Button>
            </div>
        </form>
      </Form>

    )
}

export default UpdatePassword
