import { NavigationMenuItem, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
    to: string; // Propriété pour spécifier l'URL du lien
    title: string; // Propriété pour spécifier le titre du lien
}


function SimpleLinks(props: Props) {
    const { to, title } = props

    return (
        <>
            <NavigationMenuItem>
                <NavLink to={to} 
                className={({ isActive }) => cn(isActive ? 'bg-customYellow text-customBlack' : '', navigationMenuTriggerStyle(), 'navLink')}>
                    {title}
                </NavLink>
            </NavigationMenuItem>
        </>
    )
}

export default SimpleLinks
