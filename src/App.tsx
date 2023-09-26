import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';
import Container from './layouts/container';
import FullWidthScreen from './layouts/fullWidthScreen';
import { ToggleLang } from './components/toggles/lang';

import useAuthContext from './context/AuthContext';


const MyComponent: React.FC = () => {
  const { t } = useTranslation();
 
  const { user, getUser } = useAuthContext() as AuthContextType;

  useEffect(() => {
    if(!user) {
      getUser();
    }
  },[])

  return (
    <FullWidthScreen className='bg-customYellow'>
      <Container className='my-0 flex justify-center items-center min-h-[80vh] '>
          <h1>Hello, World!</h1>
          <Badge>{user?.name}</Badge>
          <Button variant='yellow'>Button</Button>
          <div>
            <ToggleLang />
          </div>
      </Container>
    </FullWidthScreen>

  );
};

export default MyComponent;

