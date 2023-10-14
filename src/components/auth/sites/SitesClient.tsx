import React from 'react'
import HeadingDashboard from '../dashboard/HeadingDashboard'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/ui/data-table'
import { SiteColumn, getSiteColumns } from './dataTable/Columns'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface Props {
    data: SiteColumn[];
}

function SitesClient(props: Props) {
    const { data } = props
    const { t } = useTranslation();
    const SiteColumns = getSiteColumns();
    return (
        <>
            <div className='flex items-center justify-between'>
                <HeadingDashboard 
                title={t('site:sites_header_title')}
                description={t('site:sites_header_description')}
                />
                <Button size="sm" variant="dark">
                    <Link to="/site/create" className='flex items-center'>
                        <Plus className='mr-2 h-4 w-4' />
                        Add New
                    </Link>
                </Button>
            </div>
            <Separator />
            <DataTable searchKey='name' columns={SiteColumns} data={data} />
        </>
    )
}

export default SitesClient
