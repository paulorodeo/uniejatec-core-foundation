/**
 * ThemeProvider — infraestrutura para dark mode futuro.
 * Nesta sprint permanece fixado em "light" conforme DESIGN_SYSTEM.md.
 */

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
  defaultTheme = "light",
  children,
}: {
  defaultTheme?: Theme;
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={value}>
      <div className={theme === "dark" ? "dark" : undefined}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>.");
  return ctx;
}
