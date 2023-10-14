import SitesClient from '@/components/auth/sites/SitesClient';
import { SiteColumn } from '@/components/auth/sites/dataTable/Columns';
import useAuthContext from '@/context/AuthContext';
import React from 'react'

interface Props {}

function Sites(props: Props): React.ReactElement  {
    const {} = props

    // const { user, userLoading } = useAuthContext() as AuthContextType;
    const sites = [
    {
        "name": "Name",
        "monthly_mail": 0,
        "id": 1
    }
    ];

    const formatedSite: SiteColumn[] = sites.map((site) => ({
    id: site.id,
    name: site.name,
    monthly_mail: site.monthly_mail // Assurez-vous d'utiliser "monthly_mail" au lieu de "montly_mail"
    }));
    return (
        <div className='flex-col'>
            <div className='flex-1 space-y-4 px-4 py-4'>
                <SitesClient data={formatedSite}/>
            </div>
        </div>
    )
}

export default Sites
