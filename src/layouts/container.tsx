// src/layouts/MainLayout.tsx
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('max-w-6xl mx-auto px-8 md:px-4 py-4 my-4', className)}>
        {children}
    </div>
  );
};

export default Container;
