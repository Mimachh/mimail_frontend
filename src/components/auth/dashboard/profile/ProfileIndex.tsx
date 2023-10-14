import React, { useEffect, useState } from 'react'
import PersonnalInformation from './PersonnalInformation'
import UpdatePassword from './UpdatePassword'
// import LogoutOtherSession from './LogoutOtherSession'
import DeleteAccount from './DeleteAccount'
import useAuthContext from '@/context/AuthContext'
import FormSectionLayout from './FormSectionLayout'
import { useTranslation } from 'react-i18next'
import SendVerifyEmail from './SendVerifyEmail'

interface Props {}

function ProfileIndex(props: Props) {
    const {} = props
    const { t } = useTranslation()
    const [formLoading, setFormLoading] = useState(false);
    const { user, getUser, csrf, userLoading, hasRole } = useAuthContext() as AuthContextType;
    const isAuthorized = hasRole('User');

    // <h2 className="text-base font-semibold leading-7">{t('profile:personal_information')}</h2>
    //     <p className="mt-1 text-sm leading-6 text-gray-400">
    //       {t('profile:personal_information')}

    return (
        <div className=''>
            <div className="xl:pl-72">
                <main>
                    <div className="divide-y divide-muted-foreground/20">
                        <FormSectionLayout
                        title={t('profile:personal_information')}
                        subtitle={t('profile:user_permanent_address')}
                        >
                            <PersonnalInformation 
                            user={user}
                            csrf={csrf}
                            formLoading={formLoading}
                            setFormLoading={setFormLoading}
                            />
                        </FormSectionLayout>

                        <FormSectionLayout
                        title={t('profile:password_change')}
                        subtitle={t('profile:password_change_subtitle')}
                        >
                            <UpdatePassword 
                            user={user}
                            csrf={csrf}
                            formLoading={formLoading}
                            setFormLoading={setFormLoading}
                            />
                        </FormSectionLayout>

                        <FormSectionLayout
                        title={t('profile:verify_email_title')}
                        subtitle={t('profile:verify_email_subtitle')}
                        >
                            <SendVerifyEmail 
                            user={user}
                            />
                        </FormSectionLayout>
                        
                        <FormSectionLayout
                        title={t('profile:delete_account_title')}
                        subtitle={t('profile:delete_account_subtitle')}
                        >
                            <DeleteAccount />
                        </FormSectionLayout>
                        
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ProfileIndex
