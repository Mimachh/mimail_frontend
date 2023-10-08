import React, { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode;
    title?: string;
    subtitle?: string;
}

const FormSectionLayout: React.FC<LayoutProps> = ({
    children,
    subtitle,
    title
}) => {
    return (
        <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-base font-semibold leading-7">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            {subtitle}
          </p>
        </div>
        {children}
        </div>

    )
}

export default FormSectionLayout
