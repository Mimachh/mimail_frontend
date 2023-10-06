import { Menu } from 'lucide-react'
import React from 'react'
import { SheetContent,Sheet, SheetTrigger } from '../ui/sheet'
import Sidebar from './Sidebar'


interface Props {}

function MobileSidebar(props: Props) {
    const {} = props

    return (
        <Sheet>
        <SheetTrigger>
              <Menu className="md:hidden"/>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
    )
}

export default MobileSidebar
