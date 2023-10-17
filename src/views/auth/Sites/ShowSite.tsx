import axios from '@/api/axios';
import HeadingDashboard from '@/components/auth/dashboard/HeadingDashboard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import useAuthContext from '@/context/AuthContext';
import { formatToken } from '@/lib/auth/dashboard/transformSiteToken';
import { UserSiteData } from '@/lib/auth/typeUserSite';
import { onCopy } from '@/lib/copyToClipboard';
import { errorToast } from '@/lib/toast/errorToast';
import { successToast } from '@/lib/toast/successToast';
import { Copy, Eye, EyeOff } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

interface Props {}

function ShowSite(props: Props) {
    const {} = props
    const { id } = useParams<{ id: string }>();
    const { user } = useAuthContext() as AuthContextType;
    const [loading, setLoading] = useState(false);
    const [userSite, setUserSite] = useState<UserSiteData | null>(null);
    const [hideToken, setHideToken] = useState(true);
    const { t } = useTranslation()
    useEffect(() => {
        setLoading(true);
        axios.get(`/api/sites/${user.id}/${id}`)
          .then((response) => {
            const responseData = response.data.data[0] as UserSiteData;
            setUserSite(responseData);
            console.log(responseData);
          })
          .catch((error) => {
            console.log(error)
            console.error('Erreur lors de la récupération des sites', error.response.status);
          })
          .finally(() => {
            setLoading(false);
          });
    }, [id]);


    return (
<div className='px-4'>
     <HeadingDashboard 
     title='titre'
     description='des'
     />
     <Separator />
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="bg-yellow-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">Nom du site</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userSite?.name}</dd>
          </div>
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">Url</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userSite?.url}</dd>
          </div>
          <div className="bg-yellow-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">Mails envoyés dans le mois</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userSite?.monthly_mail}</dd>
          </div>
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">Mails envoyés au total</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userSite?.total_mail}</dd>
          </div>
          <div className="bg-yellow-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">Clé API</dt>
            <dd 
            className="w-full mt-1 text-sm leading-6  
            text-gray-700 sm:col-span-2 sm:mt-0
            flex items-center gap-1
            ">
                <div className=" w-[70%] overflow-x-auto flex flex-wrap bg-white rounded-md">
                    {formatToken(userSite?.token, hideToken)}
                </div>
                <button type='button'
                className='w-fit h-fit px-0 py-0 text-customBlack'
                onClick={() => setHideToken(!hideToken)}
                >
                    { hideToken ? (
                        <Eye className='h-5 w-5'/>
                    ) : (
                        <EyeOff className='h-5 w-5' />
                    )}
                </button>
                <button type='button'
                className='w-fit h-fit px-0 py-0 text-customBlack'
                onClick={() => onCopy(userSite?.token, t)}
                >
                <Copy className='h-5 w-5 text-customBlack' />
                </button>
 
            </dd>
          </div>
        </dl>
      </div>
    </div>
    )
}

export default ShowSite
