"use client";

import useIsMounted from "@/utils/hooks/useIsMounted";
import { useTheme } from "next-themes";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  // Error: Hydration failed because the initial UI does not match what was rendered on the server.
  if (!isMounted) return null;

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
};
