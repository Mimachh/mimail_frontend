import axios from '@/api/axios';
import { ConfirmModal } from '@/components/modals/confirmModal'
import useAuthContext from '@/context/AuthContext';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { set } from 'zod';

interface Props {}

function DeleteAccount(props: Props) {
    const {} = props
    const [openConfirmModalUserDelete, setOpenConfirmModalUserDelete] = useState(false);
    const [loading, setLoading] = useState(false);
    const { getUser, csrf, user, logout } = useAuthContext() as AuthContextType;

    
    const onDeleteUser = async () => {
      await csrf();
      try {
          setLoading(true);
          await axios.delete(`/api/user/${user.id}/delete/`);
          logout();
      } catch (error) {
          console.log(error);
      } finally {
          setLoading(false);
          setOpenConfirmModalUserDelete(false);
      }
    }

    const { t } = useTranslation()
    return (
        <div className="flex items-start md:col-span-2">
          <ConfirmModal 
            isOpen={openConfirmModalUserDelete}
            onClose={() => setOpenConfirmModalUserDelete(false)}
            onConfirm={onDeleteUser}
            loading={loading}
          />
          <button
          onClick={() => setOpenConfirmModalUserDelete(true)}
            type="submit"
            className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400"
          >
            {t('profile:yes_delete_account')}
          </button>
        </div>
    )
}

export default DeleteAccount
