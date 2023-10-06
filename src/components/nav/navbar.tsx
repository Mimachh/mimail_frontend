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
import ToggleMenuMobile from '../toggles/menuMobile'
import { AnimatePresence, useCycle } from 'framer-motion'
import NavMobileMenu from './NavMobileMenu'

interface Props {}

function NavAuth(props: Props) {
    const {} = props
    const components = navLinkComponent;
    const { t } = useTranslation();
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    const authContext = useAuthContext() as AuthContextType;
    const { user, logout, userLoading } = authContext;

    // mobile Menu
    const [mobileNav, toggleMobileNav] = useCycle(false, true);
    function toggleMobileButton() {
      mobileNav === false ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
      toggleMobileNav();
      
    }
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [areWeLarge, setAreWeLarge] = useState(isLargeScreen);

    useEffect(() => {

      const handleResize = () => {
        if (typeof window !== 'undefined') {
          const newIsLargeScreen = window.innerWidth > 1024;
          setIsLargeScreen(newIsLargeScreen);
          setAreWeLarge(newIsLargeScreen);
          toggleMobileNav(0);
        }
      }
      handleResize();
      if(typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize);
      }

      const handleLocationChange = () => {
        setCurrentPath(window.location.pathname);
      };
      window.addEventListener('popstate', handleLocationChange);
      
      return () => {
        window.removeEventListener('popstate', handleLocationChange);
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    
    return (
        <FullWidthScreen className='bg-customBlack text-customYellow'>
            <Container className='my-0 py-0'>
                <nav className='z-50 relative h-12 flex items-center justify-between'>
                    <Logo />
                    <div className='hidden lg:flex items-center px-5 gap-3'>
                        <NavContent />
                    </div>
                    {/* <div className='lg:hidden block'> */}
                    <AnimatePresence>
                      { !areWeLarge &&
                        <ToggleMenuMobile 
                        areWeLarge={areWeLarge}
                        toggleMobileButton={toggleMobileButton}
                        mobileNav={mobileNav}
                        />
                      }
                      {areWeLarge}
                    </AnimatePresence>
                      
                    {/* </div> */}
                </nav>
            </Container>
            <AnimatePresence>
            { mobileNav &&
              <NavMobileMenu 
              isLargeScreen={isLargeScreen}
              toggleMobileButton={toggleMobileButton}
            />
            }
            </AnimatePresence>

        </FullWidthScreen>

    )
}

export default NavAuth
