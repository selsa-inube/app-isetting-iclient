import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { tokensWithReference } from "@design/tokens/tokensWithReference";

type ThemeName = keyof typeof tokensWithReference;

interface IThemeContextType {
  themeName: ThemeName;
  setThemeName: Dispatch<SetStateAction<ThemeName>>;
}

const ThemeContext = createContext<IThemeContextType>({
  themeName: "sistemasenlinea",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setThemeName: () => {},
});

const useTheme = () => useContext(ThemeContext);

export { ThemeContext, useTheme };
export type { ThemeName, IThemeContextType };
