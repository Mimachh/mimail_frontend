import { Button } from "@/components/ui/button"
import * as Icons from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import useAuthContext from "@/context/AuthContext"
import { useTranslation } from "react-i18next"
import { iconComponents } from "@/lib/iconLucide";
import { AvatarButton } from "./Avatar";
import { getSidebarRoutes } from "@/lib/constantsLinkNav";


// interface DropDownLinksCustomProps {
//     to: string;
//     text: string;
//     icon?: keyof typeof iconComponents;
//     icon?: string;
// }

export function AuthDropdown() {

    const authContext = useAuthContext() as AuthContextType;
    const { logout } = authContext;
    const { t } = useTranslation();
    const sidebarRoutes = getSidebarRoutes();
    const customLinks = [
        { text: t('common:dashboard'), to: "/dashboard", icon: 'Dashboard' },
        { text: t('common:api'), to: "/api", icon: 'Key' },
        { text: t('common:profile'), to: "/profile", icon: 'User' },
        { text: t('common:settings'), to: "/settings", icon: 'Settings' },
    ];
    const mappedLinks = customLinks.map((link) => ({
        text: link.text,
        to: link.to,
        icon: mapIconName(link.icon),
      }));
      function mapIconName(name: string): keyof typeof iconComponents | undefined {
        // Vérifiez si le nom d'icône existe en tant que clé dans iconComponents
        if (iconComponents[name]) {
          return name as keyof typeof iconComponents;
        }
        // Si le nom d'icône n'est pas trouvé, retournez undefined
        return undefined;
      }
      
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button className="bg-white w-8 h-8 rounded-full cursor-pointer">
                <AvatarButton />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mt-1.5 bg-customBlack-foreground text-customYellow-foreground">
        <DropdownMenuLabel className="text-white">{t('common:my_account')}</DropdownMenuLabel>
            <DropdownMenuSeparator />
              {/* {mappedLinks.map((link, index) => (
                <DropDownLinksCustom 
                key={index} 
                to={link.to} 
                text={link.text} 
                icon={link.icon}
                />
              ))} */}
              {sidebarRoutes.map((route) => (
                <DropdownMenuItem 
                key={route.href}
                className="cursor-pointer w-full px-0 py-0  focus:bg-transparent focus:text-inherit">
                  <NavLink
                    to={route.href}
                    className={({ isActive }) =>
                      cn(
                        isActive ? 'bg-customYellow-foreground text-customBlack' : '',
                        'flex items-center hover:bg-customYellow-foreground hover:text-customBlack w-full py-1.5 pl-2 rounded-sm'
                      )
                    }
                  >
                    <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                    {route.label}
                  </NavLink>
                </DropdownMenuItem>
              ))}
                 <DropdownMenuSeparator />
                <DropdownMenuItem className="px-0 w-full focus:bg-transparent focus:text-inherit py-1">
                    <Button
                    onClick={logout}
                    size="xs" 
                    className={cn('bg-customYellow-foreground text-customBlack', 'hover:bg-customYellow-foreground hover:text-customBlack w-full rounded-sm'
                    )}
                    >
                        <Icons.LogOut className="mr-2 h-4 w-4" />

                        {t('common:logout')}
                    </Button>
                </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
  }
  


  // const DropDownLinksCustom = ({ to, text, icon }: DropDownLinksCustomProps) => {
  //   let iconComponent: React.ReactNode | null = null; // Initialisez la variable iconComponent à null par défaut

  //   if (icon) {
  //       const IconComponent = iconComponents[icon];
  //       if (IconComponent) {
  //         iconComponent = <IconComponent className="mr-2 h-4 w-4" />;
  //       }
  //   }
    
  //   return (
  //     <DropdownMenuItem className="cursor-pointer w-full px-0 py-0  focus:bg-transparent focus:text-inherit">
  //       <NavLink
  //         to={to}
  //         className={({ isActive }) =>
  //           cn(
  //             isActive ? 'bg-customYellow-foreground text-customBlack' : '',
  //             'flex items-center hover:bg-customYellow-foreground hover:text-customBlack w-full py-1.5 pl-2 rounded-sm'
  //           )
  //         }
  //       >
  //         {iconComponent} 
  //         {text}
  //       </NavLink>
  //     </DropdownMenuItem>
  //   )
  // }
    