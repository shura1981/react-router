declare module 'mdb-ui-kit' {
  export const Ripple: {
    new (element: Element, options?: { rippleColor?: string }): unknown;
  };
  export const Sidenav: {
    getInstance(element: HTMLElement | null): {
      changeMode(mode: string): void;
      hide(): void;
      show(): void;
    } | null;
  };
  export const Dropdown: unknown;
  export const Navbar: unknown;
  export function initMDB(components: Record<string, unknown>): void;
}

declare module 'mdb-ui-kit/js/chart.es.min.js' {
  export const Chart: {
    new (element: HTMLElement, data: unknown, options?: unknown): unknown;
  };
  export function initMDB(components: Record<string, unknown>): void;
}
