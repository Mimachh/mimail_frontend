import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

interface Props {}

function NotFound(props: Props): React.ReactElement { 
    const {} = props
    const {t} = useTranslation()
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base md:text-4xl font-semibold text-customYellow px-4 py-3 bg-customBlack rounded-xl">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{t("page400:404")}</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">{t('page400:404_sorry')}</p>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-6">
            <NavLink
              to={"/"}
              className="rounded-xl bg-customYellow px-3.5 py-2.5 transition-all duration-75 ease-in text-sm font-semibold text-customBlack shadow-sm hover:bg-customBlack hover:text-customYellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customYellow"
            >
              {t('common:go_back_home')}
            </NavLink>
            <a href="#" className="text-sm font-semibold text-customBlack transition-all hover:text-primary">
              {t('common:contact_support')}<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    )
}

export default NotFound
