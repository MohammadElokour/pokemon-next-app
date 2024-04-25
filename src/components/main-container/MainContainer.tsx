import React from "react";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-grow overflow-auto max-h-[calc(100vh-450px)] sm:max-h-[calc(100vh-400px)] pr-2 -mr-2">
      {children}
    </main>
  );
};

export default MainContainer;
