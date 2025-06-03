import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import { OverviewPage } from "./components/overview-page";

const themeComponents = getThemeComponents({
  OverviewPage,
});

type ComponentsType = Parameters<typeof getThemeComponents>[0];

export function useMDXComponents(components?: ComponentsType) {
  return {
    ...themeComponents,
    ...components,
  };
}
