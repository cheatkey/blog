import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import { OverviewPage } from "./components/overview-page";
import AnimatedText from "./components/text";

const themeComponents = getThemeComponents({
  OverviewPage,
  AnimatedText,
});

type ComponentsType = Parameters<typeof getThemeComponents>[0];

export function useMDXComponents(components?: ComponentsType) {
  return {
    ...themeComponents,
    ...components,
  };
}
