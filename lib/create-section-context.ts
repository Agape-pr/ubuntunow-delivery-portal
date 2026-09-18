"use client";

import { createContext, useContext } from "react";

/**
 * The active sidebar section lives in the shell (admin/portal), one route
 * segment above the page that needs to read it -- a plain prop can't cross
 * that boundary, so it's threaded through context instead.
 */
export function createSectionContext<Key extends string>(hookName: string) {
  const Context = createContext<Key | null>(null);

  function useSection(): Key {
    const value = useContext(Context);
    if (value === null) {
      throw new Error(`${hookName} must be used within its matching shell`);
    }
    return value;
  }

  return { Provider: Context.Provider, useSection };
}
