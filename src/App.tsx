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
import toast from 'react-hot-toast';
import { successToast } from './lib/toast/successToast';



const MyComponent: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, userLoading } = useAuthContext() as AuthContextType;
  const notify = () => toast.success((t) => (
    <span>
      Custom and <b>bold</b>
      <button onClick={() => toast.dismiss(t.id)}>
        Dismiss
      </button>
    </span>
  ));
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
            {!userLoading && 
            <Badge>{user?.last_name}</Badge>
            }
  
              <button onClick={notify}>Make me a toast</button>
            <Button variant='yellow' onClick={verify}>Button</Button>
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

