import LoginForm from '@/components/auth/login/loginForm';
import Container from '@/layouts/container';
import FullWidthScreen from '@/layouts/fullWidthScreen';
import React from 'react';


interface Props {}

function Login(props: Props): React.ReactElement { // Ajoutez la mention de React.ReactElement
    const {} = props;
    return (
            <FullWidthScreen className='bg-customYellow'>
                <Container className='my-0 w-full mx-auto flex items-center min-h-[calc(100vh-48px)]'>
                    <LoginForm />
                </Container>
            </FullWidthScreen>
    );
}

export default Login;
