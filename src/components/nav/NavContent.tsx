import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { ListItem } from './ListItems'
import { navLinkComponent } from '@/lib/constantsLinkNav'
import { useTranslation } from 'react-i18next'
import { AuthDropdown } from './auth/AuthDropdown'
import SimpleLinks from './Links/SimpleLinks'
import useAuthContext from '@/context/AuthContext'
import { ToggleLang } from '../toggles/lang'

interface Props {}

function NavContent(props: Props) {
    const {} = props
    const { t } = useTranslation();
    const components = navLinkComponent;

    const authContext = useAuthContext() as AuthContextType;
    const { user } = authContext;
    console.log(user);
    return (
        <>
        
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
                    <NavigationMenuContent className='bg-customBlack '>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[450px] ">
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
                    {/* Auth */}
                    {user ?
                    <>
                        <AuthDropdown />
                    </> : 
                    <>
                        <SimpleLinks 
                        to='/register'
                        title="S'inscrire"
                        />
                        <SimpleLinks 
                        to='/login'
                        title='Connexion'
                        />
                    </>
                    }
                </NavigationMenuList>
            </NavigationMenu>
            <ToggleLang />
        </>
    )
}

export default NavContent
