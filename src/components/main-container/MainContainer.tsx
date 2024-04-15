"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <main className="overflow-auto">{children}</main>
    </QueryClientProvider>
  );
};

export default MainContainer;
