import { MotionConfig, motion } from "framer-motion";
import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { NavLink } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu';
import { ListItem } from './ListItems';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { mobileBackdropMenu, mobileNavLinks } from "@/utils/framer";

interface Props {
    isLargeScreen: boolean;
    toggleMobileButton: () => void;
}

function NavMobileMenu({ isLargeScreen, toggleMobileButton }: Props) {
   const { t } = useTranslation();
   const [tog, setTog] = useState(false);
   function open() {
    setTog(!tog);
   }
    return (
        <MotionConfig transition={{
            type: "spring",
            bounce: 0.099
        }}>
        <motion.div
        key="mobile-nav"
        variants={mobileBackdropMenu()}
        initial="closed"
        animate="open"
        exit="closed"
        className='z-10 opacity-90 fixed inset-0
         bg-customBlack
         flex items-center
         '
        >
            <motion.div className='h-screen mt-[200px] w-full'
            variants={mobileNavLinks()}
            >
                <Accordion className='w-full px-8' type="single" collapsible>
                    <AccordionItem value="item-1" className='border-none'>
                        <AccordionTrigger className='hover:no-underline'>Is it accessible?</AccordionTrigger>
                        <AccordionContent className='w-full'>
                        <NavLink to="/" className="bg-gradient-to-r text-customBlack font-clashMedium from-customYellow to-customYellow-foreground w-full inline-block py-3 px-4 rounded-xl">Home</NavLink>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion className='w-full px-8' type="single" collapsible>
                    <AccordionItem value="item-1" className='border-none'>
                        <AccordionTrigger className='hover:no-underline'>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                        <NavLink to="/">Home</NavLink>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <NavLink to="/" className="w-full inline-block bg-gradient-to-r text-customBlack font-clashMedium from-customYellow to-customYellow-foreground py-3 px-8 rounded-xl">Home</NavLink>
        
            </motion.div>

         

        </motion.div>
        </MotionConfig>
    )
}

export default NavMobileMenu
