import RegisterForm from '@/components/auth/RegisterForm'
import Container from '@/layouts/container'
import FullWidthScreen from '@/layouts/fullWidthScreen'

import React from 'react'

interface Props {}

function Signup(props: Props): React.ReactElement { 
    const {} = props

    return (
        <FullWidthScreen className='bg-customYellow'>
            <Container className='my-0 w-full mx-auto flex items-center min-h-[calc(100vh-48px)]'>
                <RegisterForm />
            </Container>
        </FullWidthScreen>
    )
}

export default Signup
