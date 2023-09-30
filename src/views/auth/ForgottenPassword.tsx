import ForgotPasswordForm from '@/components/auth/login/ForgotPasswordForm'
import Container from '@/layouts/container'
import FullWidthScreen from '@/layouts/fullWidthScreen'
import React from 'react'

function ForgottenPassword(): React.ReactElement {
    return (
        <FullWidthScreen className='bg-customYellow'>
            <Container className='my-0 w-full mx-auto flex items-center min-h-[calc(100vh-48px)]'>
                <ForgotPasswordForm />
            </Container>
        </FullWidthScreen>
    )
}

export default ForgottenPassword
