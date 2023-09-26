import React, { ReactNode } from 'react';

type GuestLayoutProps = {
  children: ReactNode; // Permet d'accepter n'importe quel élément React comme enfant
};

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default GuestLayout;
