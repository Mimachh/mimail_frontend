import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'
import { sidebarRoutes } from '@/lib/constantsLinkNav'

interface Props {}




function Sidebar(props: Props) {
    const {} = props
    const appName = import.meta.env.VITE_APP_NAME;
    return (
        <div 
    className="space-y-4 py-4 flex flex-col h-full
    bg-gradient-to-b from-customYellow to-muted-foreground/90 text-customBlack
    "
    >
        <div className="px-3 py-2 mb-12 md:mb-0 flex-1 md:flex-initial">
            <a href={"/dashboard"} className="flex items-center pl-3 mb-14">
                {/* <div className="relative w-8 h-8 mr-4">
                    IMAGE
                </div> */}
                <h1 className="">{appName}</h1>
            </a>
            <div className="space-y-1">
            {sidebarRoutes.map((route) => (
                    <NavLink
                    to={route.href}
                    key={route.href}
                    className={({ isActive }) => cn('text-sm group flex p-3 w-full justify-start font-medium cursor-pointerhover:text-white hover:bg-white/10 rounded-lg transition', isActive ? 'text-white bg-white/10' : 'text-zinc-400')}
                    >
                        <div className="flex items-center flex-1 gap-2">
                            <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                            {route.label}
                            {route.beta == true ? (
                                <Badge variant='default'>Beta</Badge>
                            ) : ( "" )}
                            
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
 
    </div>
    )
}

export default Sidebar
