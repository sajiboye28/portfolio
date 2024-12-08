declare module 'react-scroll' {
  import { ComponentType } from 'react';

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    className?: string;
    activeClass?: string;
    children?: React.ReactNode;
    onClick?: () => void;
  }

  export const Link: ComponentType<LinkProps>;
  export const Element: ComponentType<any>;
  export const animateScroll: {
    scrollToTop: () => void;
    scrollTo: (to: number, options?: any) => void;
  };
}
