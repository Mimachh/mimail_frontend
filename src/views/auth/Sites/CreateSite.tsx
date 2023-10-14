import HeadingDashboard from '@/components/auth/dashboard/HeadingDashboard';
import { Separator } from '@/components/ui/separator';
import axios from 'axios';
import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface Props {}

function CreateSite(props: Props): React.ReactElement {
  const [formData, setFormData] = useState({ 
    name: "",
    url: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
    //   const response = await axios.post('/votre-url-de-post', formData);
    console.log(formData)
      // Traitez la réponse comme vous le souhaitez (par exemple, affichez un message de succès).
    } catch (error) {
      // Gérez les erreurs (par exemple, affichez un message d'erreur).
    }
  };

  return (
    <div className="px-4 space-y-4 py-4 w-full">
      <HeadingDashboard 
      title='Create a site'
      description="Create your site's space to connect to"
      />
      <Separator />
      <form onSubmit={handleSubmit} 
      className='pt-4 space-y-4'>
        
        <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
            </label>
            <small>Used to reference and retrieve your site on our service</small>
            <div className="relative mt-2 rounded-md shadow-sm w-full md:w-1/2">
                <input
                type="text"
                name="name"
                id="name"
                className="block w-full  rounded-md border-0 py-1.5 pr-10 
                text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 
                focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
                defaultValue="adamwathan"
                aria-invalid="true"
                aria-describedby="email-error"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <AlertCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
            </div>
            <p className="mt-2 text-sm text-red-600" id="email-error">
                Not a valid email address.
            </p>
        </div>
        
        <div className=''>
          <label htmlFor="company-website" className="block text-sm font-medium leading-6 text-gray-900">
            Website Url
          </label>
          <div className="mt-2 w-full md:w-1/2">
            <div className=" ring-red-300 relative flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 
            focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">https://</span>
              <input
                type="text"
                name="companyWebsite"
                id="company-website"
                value={formData.url}
                onChange={handleInputChange}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  focus:ring-0  sm:text-sm sm:leading-6"
                placeholder="www.example.com"
              />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <AlertCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
            </div>
            <p className="mt-2 text-sm text-red-600" id="email-error">
                Not a valid email address.
            </p>
          </div>
        </div>

        
        <Button type="submit" variant="dark">Submit</Button>
      </form>
    </div>
  );
}

export default CreateSite;
