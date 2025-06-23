import React from "react";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="p-1 sm:-translate-y-9 sm:scale-90 flex flex-grow overflow-auto max-h-[calc(100vh-200px)] sm:max-h-[calc(100vh-177px)] sm:h-[calc(100vh-150px)] overflow-x-hidden">
      {children}
    </main>
  );
};

export default MainContainer;
