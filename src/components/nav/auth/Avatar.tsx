
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

import useAuthContext from "@/context/AuthContext"


export function AvatarButton() {

    // const authContext = useAuthContext() as AuthContextType;
      
    return (
        <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>   
    )
  }
    