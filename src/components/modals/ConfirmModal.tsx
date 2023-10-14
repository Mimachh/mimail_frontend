import { useEffect, useState } from "react"
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";


interface OpenConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    loading: boolean;
}

export const ConfirmModal: React.FC<OpenConfirmModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    loading
}) => {
        
    const { t } = useTranslation();
    return (
        <Modal
        title={t('common:confirm_modale_title')}
        description={t('common:confirm_modale_description')}
        isOpen={isOpen}
        onClose={onClose}
        >
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button disabled={loading} variant="default" className="text-customYellow" onClick={onClose}>
                    {t('common:cancel')}
                </Button>
                <Button disabled={loading} variant="destructive" onClick={onConfirm}>
                    {t('common:continue')}
                </Button>
            </div>
        </Modal>
    )
};