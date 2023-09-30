import ResetPasswordForm from '@/components/auth/login/ResetPasswordForm'
import Container from '@/layouts/container'
import FullWidthScreen from '@/layouts/fullWidthScreen'
import React from 'react'

function ResetPassword(): React.ReactElement {
    return (
        <FullWidthScreen className='bg-customYellow'>
            <Container className='my-0 w-full mx-auto flex items-center min-h-[calc(100vh-48px)]'>
                <ResetPasswordForm />
            </Container>
        </FullWidthScreen>
    )
}

export default ResetPassword