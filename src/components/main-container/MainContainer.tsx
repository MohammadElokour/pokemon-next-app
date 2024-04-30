import React from "react";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="p-1 flex flex-grow overflow-auto max-h-[calc(100vh-450px)] sm:max-h-[calc(100vh-400px)] -mr-2 overflow-x-hidden">
      {children}
    </main>
  );
};

export default MainContainer;
