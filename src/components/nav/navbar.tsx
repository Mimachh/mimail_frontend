import Container from '@/layouts/container'
import FullWidthScreen from '@/layouts/fullWidthScreen'
import React, { useEffect, useState } from 'react'
import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { navLinkComponent } from '@/lib/constantsLinkNav'
import { ToggleLang } from '../toggles/lang'
import { ListItem } from './ListItems'
import Logo from '../Logo'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'



interface Props {}

function Navbar(props: Props) {
    const {} = props
    const components = navLinkComponent;
    const { t } = useTranslation();
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    useEffect(() => {
      // Mettre à jour l'état lorsque l'URL change
      const handleLocationChange = () => {
        setCurrentPath(window.location.pathname);
      };
  
      // Ajouter un écouteur d'événements pour le changement d'URL
      window.addEventListener('popstate', handleLocationChange);
  
      return () => {
        // Nettoyer l'écouteur d'événements lors du démontage du composant
        window.removeEventListener('popstate', handleLocationChange);
      };
    }, []);

    return (
        <FullWidthScreen className='bg-customBlack text-customYellow'>
            <Container className='my-0 py-0'>
                <nav className='h-12 flex items-center justify-between'>
                    <Logo />
                    <div className='flex items-center px-3 gap-3'>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                <NavigationMenuTrigger className='bg-transparent navLink'>{t('common:getting_started')}</NavigationMenuTrigger>
                                <NavigationMenuContent className='bg-customBlack'>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3 ">
                                    <NavigationMenuLink asChild>
                                        <div className='h-full'>
                                        <NavLink to="/"
                                            className={({ isActive }) => cn('group flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md transition-colors border border-customYellow bg-gradient-to-b from-muted/30 to-customBlack hover:to-muted hover:from-customYellow hover:text-accent-foreground focus:bg-customYellow focus:text-accent-foreground', isActive ? 'bg-gradient-to-b to-muted from-customYellow text-customBlack' : 'text-customYellow')}
                                        >
                                            
                                            {/* <Icons.logo className="h-6 w-6" /> */}
                                            <div className="group-hover:text-customBlack transition-colors mb-2 mt-4 text-lg font-medium">
                                            shadcn/ui
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components built with Radix UI and
                                            Tailwind CSS.
                                            </p>
                                        </NavLink>
                                        </div>
                                    </NavigationMenuLink>  
                                    </li>
                                    <ListItem 
                                    href="/docs" 
                                    title="Introduction"
                                    >
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                    <ListItem href="/docs/installation" title="Installation">
                                        How to install dependencies and structure your app.
                                    </ListItem>
                                    <ListItem href="/docs/primitives/typography" title="Typography">
                                        Styles for headings, paragraphs, lists...etc
                                    </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                <NavigationMenuTrigger  className='bg-transparent navLink'>Components</NavigationMenuTrigger>
                                <NavigationMenuContent className='bg-customBlack'>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {components.map((component) => (
                                        <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                        className='hover:bg-gradient-to-b from-muted/30 to-muted hover:bg-customYellow'
                                        >
                                        {component.description}
                                        </ListItem>
                                    ))}
                                    </ul>
                                </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href='/auth/dashboard' className={cn("navLink", currentPath === '/auth/dashboard' ? 'bg-customYellow text-customBlack' : '', navigationMenuTriggerStyle())}>
                                        Documentation
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavLink to='/login' 
                                      className={({ isActive }) => cn(isActive ? 'bg-customYellow text-customBlack' : '', navigationMenuTriggerStyle(), 'navLink')}>
                                        Connexion
                                    </NavLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavLink to='/register' 
                                      className={({ isActive }) => cn(isActive ? 'bg-customYellow text-customBlack' : '', navigationMenuTriggerStyle(), 'navLink')}>
                                        Inscription
                                    </NavLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <ToggleLang />
                        


                    </div>
                </nav>
            </Container>

        </FullWidthScreen>

    )
}

export default Navbar
