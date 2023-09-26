import React, { ReactNode } from 'react';

type AuthLayoutProps = {
  children: ReactNode; // Permet d'accepter n'importe quel élément React comme enfant
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
    auth
      {/* Votre mise en page ici */}
      {children}
    </>
  );
};

export default AuthLayout;
