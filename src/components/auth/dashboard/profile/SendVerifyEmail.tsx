import { Button } from '@/components/ui/button'
import { SendEmailSettingsProps } from '@/lib/auth/dashboard/typeProfileSettingsProps'
import { CheckCircle2 } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'


function SendVerifyEmail(props: SendEmailSettingsProps) {
    const {user} = props
    const { t } = useTranslation()

    return (
        <div className="md:col-span-2">
          <div className="mt-8 flex">
            {user.email_verified_at ? (
              <p className='text-sm flex items-center gap-2'>
              <CheckCircle2
              className='h-5 w-5 text-green-600' 
              />
              <span>{t('profile:your_email_is_verified')}</span>
              </p>
            ) : (
            <Button variant="yellow">{t('profile:verify_email_button')}</Button>
            )}
          </div>
        </div>
    )
}

export default SendVerifyEmail
