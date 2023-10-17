import axios from '@/api/axios';
import HeadingDashboard from '@/components/auth/dashboard/HeadingDashboard';
import DeleteButton from '@/components/auth/sites/DeleteButton';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import useAuthContext from '@/context/AuthContext';
import { formatToken } from '@/lib/auth/dashboard/transformSiteToken';
import { UserSiteData } from '@/lib/auth/typeUserSite';
import { onCopy } from '@/lib/copyToClipboard';
import { errorToast } from '@/lib/toast/errorToast';
import { successToast } from '@/lib/toast/successToast';
import { Copy, Edit, Eye, EyeOff, Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

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
     <div className='flex items-center justify-between'>
        <HeadingDashboard 
        title={userSite?.name || "Your site"}
        description={t('site:sites_header_description')}
        />
        <div className='flex items-center'>
            {!loading && (
            <>
                <Button 
                type='button'
                className='px-2' variant="ghost">
                    <Link to=""><Edit className='w-4 h-4 text-blue-700'/></Link>
                </Button>
                <DeleteButton 
                classNameButton='px-2' 
                siteId={userSite?.id}
                />
            </>
            )}
        </div>
     </div>
     <Separator />
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="bg-yellow-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="table-dt">{t('site:create_website_name')}</dt>
            <dd className="table-dd">{
                loading ? (
                    <Loader2 className='animate animate-spin' />
                ) : (
                    userSite?.name
                )
            }</dd>
          </div>
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="table-dt">{t('site:create_website_url')}</dt>
            <dd className="table-dd">{
                loading ? (
                    <Loader2 className='animate animate-spin' />
                ) : (
                    userSite?.url
                )
            }</dd>
          </div>
          <div className="bg-yellow-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="table-dt">{t('site:monthly_mail_table')}</dt>
            <dd className="table-dd">{
                loading ? (
                    <Loader2 className='animate animate-spin' />
                ) : (
                    userSite?.monthly_mail
                )
            }</dd>
          </div>
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="table-dt">{t('site:total_mail_table')}</dt>
            <dd className="table-dd">{
                loading ? (
                    <Loader2 className='animate animate-spin' />
                ) : (
                    userSite?.total_mail
                )
            }</dd>
          </div>
          <div className="bg-yellow-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="table-dt">{t('site:api_key')}</dt>
            <dd 
            className="w-full mt-1 text-sm leading-6  
            text-gray-700 sm:col-span-2 sm:mt-0
            flex items-center gap-1
            ">
                
                    {loading ? (
                       <Loader2 className='animate animate-spin' /> 
                    ) : (
                    <>
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
                    </>
                    )}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    )
}

export default ShowSite
