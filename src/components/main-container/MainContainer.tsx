import React from "react";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex flex-grow">{children}</main>;
};

export default MainContainer;
