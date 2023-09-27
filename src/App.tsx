import React from 'react';
import { useTranslation } from 'react-i18next';

import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';
import Container from './layouts/container';
import FullWidthScreen from './layouts/fullWidthScreen';
import { ToggleLang } from './components/toggles/lang';

import useAuthContext from './context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Loader from './components/loader/loader';


const MyComponent: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, userLoading } = useAuthContext() as AuthContextType;

 

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
            <Badge>{user?.name}</Badge>
            }
            
            <Button variant='yellow'>Button</Button>
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

