import React from 'react';
import Navigation from "./Navigation";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <main className="main-wrapper">
        <Navigation />

        {props.children}
      </main>
    </>
  );
};

export default Layout;