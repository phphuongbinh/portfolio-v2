import React from "react";

interface MainLayourProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayourProps) => {
  return (
    <div className="w-full h-full inline-block z-0 bg-light px-32 relative dark:bg-dark">
      {children}
    </div>
  );
};

export default MainLayout;
