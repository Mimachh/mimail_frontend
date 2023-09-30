import Container from '@/layouts/container'
import FullWidthScreen from '@/layouts/fullWidthScreen'
import React, { useEffect, useState } from 'react'
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { navLinkComponent } from '@/lib/constantsLinkNav'
import { ToggleLang } from '../toggles/lang'
import { ListItem } from './ListItems'
import Logo from '../Logo'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import useAuthContext from '@/context/AuthContext';
import SimpleLinks from './Links/SimpleLinks'
import { AuthDropdown } from './auth/AuthDropdown'
import NavContent from './NavContent'

interface Props {}

function NavAuth(props: Props) {
    const {} = props
    const components = navLinkComponent;
    const { t } = useTranslation();
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    const authContext = useAuthContext() as AuthContextType;
    const { user, logout, userLoading } = authContext;

    useEffect(() => {
      const handleLocationChange = () => {
        setCurrentPath(window.location.pathname);
      };
      window.addEventListener('popstate', handleLocationChange);
      return () => {
        window.removeEventListener('popstate', handleLocationChange);
      };
    }, []);

    return (
        <FullWidthScreen className='bg-customBlack text-customYellow'>
            <Container className='my-0 py-0'>
                <nav className='h-12 flex items-center justify-between'>
                    Auth
                    <Logo />
                    <div className='hidden md:flex items-center px-5 gap-3'>
                        <NavContent />
                    </div>
                </nav>
            </Container>

        </FullWidthScreen>

    )
}

export default NavAuth
