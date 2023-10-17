import axios from '@/api/axios';
import SitesClient from '@/components/auth/sites/SitesClient';
import { SiteColumn } from '@/components/auth/sites/dataTable/Columns';
import useAuthContext from '@/context/AuthContext';
import { UserSiteData } from '@/lib/auth/typeUserSite';
import React, { useEffect, useState } from 'react'

interface Props {}



function Sites(props: Props): React.ReactElement  {
    const {} = props

    const { user } = useAuthContext() as AuthContextType;
    const [loading, setLoading] = useState(false);
    const [userSite, setUserSite] = useState<UserSiteData[] | null>(null);
    
    useEffect(() => {
        setLoading(true);
        axios.get(`/api/sites/${user.id}`)
          .then((response) => {
            const responseData = response.data .data as UserSiteData[];
            setUserSite(responseData);
          })
          .catch((error) => {
            console.log(error)
            console.error('Erreur lors de la récupération des sites', error.response.status);
          })
          .finally(() => {
            setLoading(false); // Cette partie sera exécutée que la requête réussisse ou échoue
          });
      }, []);


    const formatedSite: SiteColumn[] = (userSite ?? []).map((site, index) => ({
        index: index + 1,
        id: site.id,
        name: site.name,
        monthly_mail: site.monthly_mail,
        created_at: site.created_at
    }));
    return (
        <div className='flex-col'>
            <div className='flex-1 space-y-4 px-4 py-4'>
                <SitesClient 
                data={formatedSite}
                loading={loading}
                />
            </div>
        </div>
    )
}

export default Sites
