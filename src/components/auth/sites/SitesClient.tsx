import React from 'react'
import HeadingDashboard from '../dashboard/HeadingDashboard'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/ui/data-table'
import { SiteColumn, getSiteColumns } from './dataTable/Columns'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Loader from '@/components/loader/loader'

interface Props {
    data: SiteColumn[];
    loading: boolean;
}

function SitesClient(props: Props) {
    const { data, loading } = props
    const { t } = useTranslation();
    const SiteColumns = getSiteColumns();
    return (
        <>
            <div className='flex items-center justify-between'>
                <HeadingDashboard 
                title={t('site:sites_header_title')}
                description={t('site:sites_header_description')}
                />
                <Button size="sm" variant="dark" className='w-fit h-fit'>
                    <Link to="/site/create" className='flex items-center px-2 py-2'>
                        <Plus className='mr-2 h-4 w-4' />
                        {t('common:add_new')}
                    </Link>
                </Button>
            </div>
            <Separator />
            {loading ? (
                <Loader />
            ) : (
                <DataTable searchKey='name' columns={SiteColumns} data={data} />
            )}
        </>
    )
}

export default SitesClient
