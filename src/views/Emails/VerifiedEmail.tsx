import Container from '@/layouts/container'
import FullWidthScreen from '@/layouts/fullWidthScreen'
import { iconComponents } from "@/lib/iconLucide";

import React from 'react'
import { useTranslation } from 'react-i18next';

function VerifiedEmail(): React.ReactElement { 

    const Check = iconComponents.Check;
    const { t } = useTranslation();
    return (
        <FullWidthScreen className='min-h-[calc(100vh-48px)] flex justify-center items-center'>
            <Container className='border shadow-lg rounded-xl my-0 w-3/4 px-4 md:px-4 md:w-[350px] mx-auto flex items-center flex-col gap-4 justify-center h-[40vh]'>
                <Check className="mr-2 h-8 w-8 text-green-500" />
                <p className='text-center'>
                {t('email:validated')} <br /> {t('email:used_the_site')}
                </p>
            </Container>
        </FullWidthScreen>
    )
}

export default VerifiedEmail
