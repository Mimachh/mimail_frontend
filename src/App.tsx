import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';
import Container from './layouts/container';
import FullWidthScreen from './layouts/fullWidthScreen';
import { ToggleLang } from './components/toggles/lang';

import useAuthContext from './context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Loader from './components/loader/loader';
import axios from './api/axios';
import { successToast } from './lib/toast/successToast';
import toast from 'react-hot-toast';



const MyComponent: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, userLoading, hasRole } = useAuthContext() as AuthContextType;

  const isAuthorized = hasRole('User');

  const csrf = () => axios.get('/sanctum/csrf-cookie');
  const verify = async () => {
    console.log('verify')
    await csrf();
    try {
      const data = await axios.post('/email/verification-notification/resend');
      
      console.log(data);
    } catch (e: any) {
        console.log(e);
        if(e.response.status === 422) {
          console.log(e.response.data.errors);
        }  
        if(e.response.status === 409) {
          console.log("non validé");
        }    
    } finally {
      successToast(t('login:validation_mail_link_sent'));
    }
    
  }

  const testMiddleware = async () => {
    await csrf();
    try {
      const data = await axios.get('/api/test');
      
      console.log(data);
    
    } catch (e: any) {
        console.log(e.response.data.error);
        // if(e.response.status === 422) {
        //   console.log(e.response.data.errors);
        // }  
        // if(e.response.status === 409) {
        //   console.log("non validé");
        // }    
        if(e.response.status === 403) {
          console.log("non");
          toast.error(t('common:unauthorized_role'))
        }    
    
    } 
  }

  return (
    <FullWidthScreen className='bg-customYellow'>
      <Container className='my-0 flex justify-center items-center min-h-[80vh] '>
          { userLoading ? 
            <Loader 
            classname="bg-white border border-customBlack"
            />
          :
          <>
            <h1>Hello, World!</h1>
            {isAuthorized ? (
        <p>Vous êtes un administrateur.</p>
      ) : (
        <p>Vous n'êtes pas un administrateur.</p>
      )}
            {!userLoading && 
            <Badge>{user?.last_name}</Badge>
            }
            <Button variant='yellow' onClick={testMiddleware}>Button</Button>
            <div>
              <ToggleLang />
            </div>
          </>
          }

      </Container>
    </FullWidthScreen>

  );
};

export default MyComponent;

