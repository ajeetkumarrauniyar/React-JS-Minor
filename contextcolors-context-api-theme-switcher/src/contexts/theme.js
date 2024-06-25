import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkThemeMode: () => {},
  lightThemeMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

/* Created a custom hook `useTheme` to reduce the number of imports every time*/
export default function useTheme() {
  return useContext(ThemeContext);
}
