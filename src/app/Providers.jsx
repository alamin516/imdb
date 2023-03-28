"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-500 dark:text-gray-200 text-gray-700 transition-colors duration-200 min-h-screen select-none">{children}</div>
    </ThemeProvider>
  );
};

export default Providers;
