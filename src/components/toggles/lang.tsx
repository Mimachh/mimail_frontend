import * as React from "react"
import { useTranslation } from 'react-i18next';


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils";



export function ToggleLang() {
  const { t,  i18n } = useTranslation();
  const currentLang = i18n.language;
  const changeLanguage = (lng: 'fr' | 'en') => { 
    i18n.changeLanguage(lng);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="dark" size="sm" 
        className="w-24 
        focus:outline-none focus-visible:outline-none focus-visible:!ring-0 focus-visible:!ring-offset-0
        rounded-3xl border border-customYellow hover:border-customBlack">
        {t('common:language')}
        <span className="sr-only">Toggle Lang</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit bg-customYellow text-customBlack space-y-1 ">
        <DropdownMenuItem className={cn("hover:!text-customYellow hover:!bg-customBlack cursor-pointer", currentLang === "fr" ? "text-customYellow bg-customBlack" : "")}
        onClick={() => changeLanguage('fr')}>
        {t('common:french')}
        </DropdownMenuItem>
        <DropdownMenuItem className={cn("hover:!text-customYellow hover:!bg-customBlack cursor-pointer", currentLang === "en" ? "text-customYellow bg-customBlack" : "")}
        onClick={() => changeLanguage('en')}>
        {t('common:english')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
