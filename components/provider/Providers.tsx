"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering the theme provider on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="zinc"
      enableSystem
      disableTransitionOnChange
      value={{
        light: "light",
        dark: "dark",
        catppuccin: "catppuccin",
        zinc: "zinc",
        rose: "rose",
      }}
    >
      {children}
    </NextThemesProvider>
  );
}
