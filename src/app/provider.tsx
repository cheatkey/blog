"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider
      storageKey="dark-mode"
      enableSystem={false}
      attribute="class"
    >
      {children}
    </NextThemeProvider>
  );
}
