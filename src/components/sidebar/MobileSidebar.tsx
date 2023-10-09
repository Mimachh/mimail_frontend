import { Menu } from 'lucide-react'
import React from 'react'
import { SheetContent,Sheet, SheetTrigger, SheetClose } from '../ui/sheet'
import Sidebar from './Sidebar'


interface Props {}

function MobileSidebar(props: Props) {
    const {} = props

    return (
        <Sheet>
        <SheetTrigger>
              <Menu className="md:hidden"/>
        </SheetTrigger>
        <SheetContent
         side="left" 
         className="p-0"
         closeId="closeSidebar"
         >
            <Sidebar />
        </SheetContent>
      </Sheet>
    )
}

export default MobileSidebar
