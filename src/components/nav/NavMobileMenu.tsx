import React from 'react'

interface Props {
    isLargeScreen: boolean;
    toggleMobileButton: () => void;
}

function NavMobileMenu({ isLargeScreen, toggleMobileButton }: Props) {
   

    return (
        <div
        className='z-10 opacity-90 fixed inset-0 bg-gradient-to-b from-customBlack to-customYellow'
        >

        </div>
    )
}

export default NavMobileMenu
