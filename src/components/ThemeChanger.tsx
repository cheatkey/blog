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
      <IconWrapper onClick={() => setTheme("dark")}>
        <RiSunFill size={18} />
      </IconWrapper>
    );
  return (
    <IconWrapper onClick={() => setTheme("light")}>
      <RiMoonFill size={18} />
    </IconWrapper>
  );
};
