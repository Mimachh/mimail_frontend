import React from 'react'
import MobileSidebar from './MobileSidebar'
import { AuthDropdown } from '../nav/auth/AuthDropdown'


interface Props {}

function Navbar(props: Props) {
    const {} = props

    return (
        <div className="md:bg-none bg-gradient-to-t from-white to-customYellow-foreground flex items-center p-4 border-b shadow-sm md:shadow-none md:border-none">
        <MobileSidebar />
        <div className="flex w-full justify-end items-center gap-2">
          <AuthDropdown />
        </div>
    </div>
    )
}

export default Navbar
