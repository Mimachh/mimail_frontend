import axios from '@/api/axios';
import { ConfirmModal } from '@/components/modals/confirmModal';
import { Button } from '@/components/ui/button'
import useAuthContext from '@/context/AuthContext';
import { cn } from '@/lib/utils';
import { Trash } from 'lucide-react';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface Props {
    classNameButton?: string;
    siteId?: number;
    classNameIcon?: string;
}

function DeleteButton(props: Props) {
    const {classNameButton, siteId, classNameIcon} = props
    const [openConfirmModalSiteDelete, setOpenConfirmModalSiteDelete] = useState(false);
    const [loading, setLoading] = useState(false);

    const { csrf, user } = useAuthContext() as AuthContextType;
    const navigate = useNavigate();
    
    const onDeleteSite = async () => {
        setLoading(true);
        await csrf();
        try {
            
            await axios.delete(`/api/site/${user.id}/${siteId}/delete/`);
            navigate("/sites");
          
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            setOpenConfirmModalSiteDelete(false);
        }
    }


    return (
        <>
            <ConfirmModal 
            isOpen={openConfirmModalSiteDelete}
            onClose={() => setOpenConfirmModalSiteDelete(false)}
            onConfirm={onDeleteSite}
            loading={loading}
            />
            <Button
            className={classNameButton}
            variant="ghost"
            type='button'
            onClick={() => setOpenConfirmModalSiteDelete(true)}
            >
                <Trash className={cn("h-4 w-4 text-red-700", classNameIcon)} />
            </Button>
        </>

    )
}

export default DeleteButton
