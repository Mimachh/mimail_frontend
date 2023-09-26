// import React from "react"
// import { NavigationMenuLink } from "../ui/navigation-menu"
// import { cn } from "@/lib/utils"

// export const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a"> & { active?: boolean }
// >(({ className, title, children, active, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-b from-muted/30 to-muted hover:bg-customYellow hover:text-accent-foreground focus:bg-customYellow focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className={`text-sm font-medium leading-none group-hover:text-customBlack ${active ? 'text-customBlack' : 'text-customYellow'}`}>{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"

import React from "react"
import { NavigationMenuLink } from "../ui/navigation-menu"
import { cn } from "@/lib/utils"
import { NavLink } from "react-router-dom"

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  active?: boolean;
  href: string; // Assurez-vous que "href" est de type "string"
}

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, title, children, active, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <div>
        <NavLink
          to={href}
          className={({ isActive }) => cn(isActive, 'group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-b from-muted/30 to-muted hover:bg-customYellow hover:text-accent-foreground focus:bg-customYellow focus:text-accent-foreground', isActive ? 'bg-gradient-to-b bg-customYellow !text-customBlack' : 'text-customYellow', className)}
          {...props}
        >
          <div 
          className="text-sm font-medium leading-none group-hover:text-customBlack">{title}</div>
        
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </NavLink>
        </div>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"