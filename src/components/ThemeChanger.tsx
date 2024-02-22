"use client";

import useIsMounted from "@/utils/hooks/useIsMounted";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import IconWrapper from "./IconWrapper";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  // Error: Hydration failed because the initial UI does not match what was rendered on the server.
  if (!isMounted) return null;

  if (theme === "light")
    return (
      <IconWrapper>
        <RiSunFill size={18} onClick={() => setTheme("dark")} />
      </IconWrapper>
    );
  return (
    <IconWrapper>
      <RiMoonFill size={18} onClick={() => setTheme("light")} />
    </IconWrapper>
  );
};
