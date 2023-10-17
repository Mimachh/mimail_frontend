import HeadingDashboard from '@/components/auth/dashboard/HeadingDashboard';
import { Separator } from '@/components/ui/separator';
import React, { useEffect, useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import axios from '@/api/axios';
import useAuthContext from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { successToast } from '@/lib/toast/successToast';
import { errorToast } from '@/lib/toast/errorToast';
import ErrorMessage from '@/components/common/ErrorMessage';
import { cn } from '@/lib/utils';

interface Props {}

type FormErrors = {
  name?: string[];
  url?: string[];
};

function CreateSite(props: Props): React.ReactElement {
  const { t } = useTranslation()
  const [errors, setErrors] = useState<FormErrors>({});
  const { csrf } = useAuthContext() as AuthContextType;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setErrors({});
  }, []);

  const [formData, setFormData] = useState({ 
    name: "",
    url: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors({});
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await csrf();
    try {
      const response = await axios.post('/api/site/create', formData);
      console.log(response);
      navigate("/sites");
      successToast(t('site:site_created'));
    } catch (error: any) {
      console.log(error)
      errorToast(t('common:something_went_wrong'))
      if(error.response.status === 422) {
        setErrors(error.response.data.errors);
      }  
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 space-y-4 py-4 w-full">
      <HeadingDashboard 
      title={t('site:create_a_site_title')}
      description={t('site:create_a_site_description')}
      />
      <Separator />
      <form onSubmit={handleSubmit} 
      className='pt-4 space-y-4'>
        
        <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                {t('site:create_website_name')}
            </label>
            <small className='text-muted-foreground'>{t('site:create_website_name_description')}</small>
            <div className="relative mt-2 rounded-md shadow-sm w-full md:w-1/2">
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                id="name"
                className={cn("block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset", errors.name ? "ring-red-300 placeholder:text-red-300 focus:ring-red-500" : "ring-gray-300")}
                placeholder={t('site:create_website_name')}
                />
                {errors.name  &&
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <AlertCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
                  </div>
                }
            </div>
            {errors.name  &&
              <ErrorMessage 
              message={errors.name[0]}
              />
            }
        </div>
        
        <div>
          <label htmlFor="url" className="block text-sm font-medium leading-6 text-gray-900">
            {t('site:create_website_url')}
          </label>
          <div className="mt-2 w-full md:w-1/2">
            <div 
            className={cn('relative flex rounded-md shadow-sm ring-1 ring-inset  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600', errors.url ? "ring-red-300" : "ring-gray-300")}
            >
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">https://</span>
              <input
                type="text"
                name="url"
                id="url"
                value={formData.url}
                onChange={handleInputChange}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0  sm:text-sm sm:leading-6"
                placeholder="www.example.com"
              />
              {errors.url &&
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <AlertCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
              }

            </div>
            {errors.url  &&
              <ErrorMessage 
              message={errors.url[0]}
              />
            }
          </div>
        </div>

        
        <Button 
        disabled={loading}
        type="submit" 
        variant="dark"
        >{t('common:save')}</Button>
      </form>
    </div>
  );
}

export default CreateSite;
