// src/layouts/MainLayout.tsx
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface FullWidthScreenProps {
  children: ReactNode;
  className?: string;
}

const FullWidthScreen: React.FC<FullWidthScreenProps> = ({ children, className }) => {
  return (
    <div className={cn('w-full', className)}>
        {children}
    </div>
  );
};

export default FullWidthScreen;