import React from "react";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="p-1 flex flex-grow overflow-auto max-h-[calc(100vh-200px)] sm:max-h-[calc(100vh-260px)] -mr-2 overflow-x-hidden">
      {children}
    </main>
  );
};

export default MainContainer;
