import axios from '@/api/axios';
import { ConfirmModal } from '@/components/modals/confirmModal';
import useAuthContext from '@/context/AuthContext';
import { X } from 'lucide-react'
import React, { useState } from 'react'


interface Props {
    urlToDestroy: string;
    setAvatar: (value: string) => void;
}

function DestroyCloudinaryImg(props: Props) {
    const { urlToDestroy, setAvatar } = props

    const { getUser, csrf } = useAuthContext() as AuthContextType;


    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const onDeleteAvatar = async () => {
        await csrf();
        try {
            setLoading(true);
            await axios.delete(urlToDestroy);
            setAvatar("");
            
        } catch (error) {
            console.log(error);
        } finally {
            getUser()
            setLoading(false);
            setOpenConfirmModal(false);
        }
    }

    return (
        <>
        <ConfirmModal 
            isOpen={openConfirmModal}
            onClose={() => setOpenConfirmModal(false)}
            onConfirm={onDeleteAvatar}
            loading={loading}
        />
        <button
            className='absolute top-1 right-1'
            type='button'
            // disabled={formLoading}
            onClick={() => setOpenConfirmModal(true)}
        >
            <X className='h-5 w-5 p-[3px] outline-none border-none text-white bg-destructive rounded-full transition-all hover:text-white/80 '/>
        </button>
        </>
    )
}

export default DestroyCloudinaryImg
