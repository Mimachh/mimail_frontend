import axios from "@/api/axios";
import ErrorMessage from "@/components/common/ErrorMessage";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAuthContext from "@/context/AuthContext";
import { PersonnalInformationValues } from "@/lib/auth/dashboard/typePersonnalInformationForm";
import { errorToast } from "@/lib/toast/errorToast";
import { successToast } from "@/lib/toast/successToast";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";


interface Props {
  user: any;
  csrf: () => Promise<string>;
}
type FormErrors = {
  email?: string[];
  name?: string[];
  last_name?: string[];
};

function PersonalInformation(props: Props) {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const userData = props.user;
    const csrfData = props.csrf;
    const { t } = useTranslation()
    // console.log(userData)
    // const authContext = useAuthContext() as AuthContextType;
    // const { csrf } = authContext;
    useEffect(() => {
      setTimeout(() => {
        setErrors({});
        // setLoading(false);
      }, 600);
    }, []);

    const personnalInformationForm = useForm<PersonnalInformationValues>({
      defaultValues: {
        email: userData.email,
        last_name: userData.last_name,
        name: userData.name,
        // avatar: "",
      }
    });

    const onSubmitPersonnalInformationForm = async (values: PersonnalInformationValues) => {
      setLoading(true);
      await csrfData();
      setErrors({});
      try {
        const response = await axios.put(`/api/user/${userData.id}`, values);
        console.log(response)
        if(response.data.message === 'Profil mis à jour avec succès') {
          successToast(t('profile:update_success'))
        }
      } catch (error: any) {
        errorToast(t('common:something_went_wrong'))
        console.log(error);
        if(error.response.status === 422) {
          setErrors(error.response.data.errors);
        }  
      } finally {
        setLoading(false);
      }
    }
    // Penser à ajouter le userLoading


    return (

      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-base font-semibold leading-7">{t('profile:personal_information')}</h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            {t('profile:personal_information')}
          </p>
        </div>
        <Form {...personnalInformationForm}>
          <form onSubmit={personnalInformationForm.handleSubmit(onSubmitPersonnalInformationForm)} className="md:col-span-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                            <div className="col-span-full flex items-center gap-x-8">
                              <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                                className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
                              />
                              <div>
                                
                                {/* FORM FIELD ICI */}
                                <button
                                  type="button"
                                  className="rounded-md bg-customYellow px-3 py-2 text-sm font-semibold shadow-sm hover:bg-customYellow-foreground"
                                >
                                  Change avatar
                                </button>
                                <p className="mt-2 text-xs leading-5 text-gray-400">JPG, GIF or PNG. 1MB max.</p>
                              </div>
                            </div>
        
              <div className="sm:col-span-3">
                <FormField
                control={personnalInformationForm.control}
                name="last_name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='capitalize'>{t('register:last_name')}</FormLabel>
                    <FormControl>
                        <Input placeholder={t('register:last_name_placeholder')}
                        type='text'
                        {...field} 
                        />
                    </FormControl>
                    {errors.last_name  &&
                      <ErrorMessage 
                        message={errors.last_name[0]}
                      />
                    }
                    </FormItem>
                )}
                />
              </div>
        
              <div className="sm:col-span-3">
                <FormField
                control={personnalInformationForm.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='capitalize'>{t('register:name')}</FormLabel>
                    <FormControl>
                        <Input placeholder={t('register:name_placeholder')}
                        type='text'
                        {...field} 
                        />
                    </FormControl>
                    {errors.name  &&
                      <ErrorMessage 
                        message={errors.name[0]}
                      />
                    }
                    </FormItem>
                )}
                />
              </div>
        
              <div className="col-span-full">
                <FormField
                control={personnalInformationForm.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='capitalize'>{t('register:email')}</FormLabel>
                    <FormControl>
                        <Input placeholder={t('register:email_placeholder')}
                        type='email'
                        {...field} 
                        />
                    </FormControl>
                    {errors.email  &&
                      <ErrorMessage 
                        message={errors.email[0]}
                      />
                    }
                    </FormItem>
                )}
                />
              </div>
            </div>
        
            <div className="mt-8 flex">
              <Button disabled={loading} type='submit' variant="dark" className='text-white disabled:bg-gray-400 disabled:text-customBlack'>
                {t('common:save')}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    )
}

export default PersonalInformation
