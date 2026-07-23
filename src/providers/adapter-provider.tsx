/**
 * Providers — Adapter + Services expostos via React Context.
 * A troca do Adapter (Mock → Payload → WordPress → REST) ocorre
 * exclusivamente aqui, sem impacto em componentes ou hooks.
 */

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { createMockAdapter } from "@/adapters/mock";
import { createRepositories } from "@/repositories";
import { createServices, type Services } from "@/services";

const ServicesContext = createContext<Services | null>(null);

export function AdapterProvider({ children }: { children: ReactNode }) {
  const services = useMemo(() => {
    const adapter = createMockAdapter();
    const repos = createRepositories(adapter);
    return createServices(repos);
  }, []);

  return <ServicesContext.Provider value={services}>{children}</ServicesContext.Provider>;
}

export function useServices(): Services {
  const ctx = useContext(ServicesContext);
  if (!ctx) throw new Error("useServices must be used within <AdapterProvider>.");
  return ctx;
}
