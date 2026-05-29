import React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          scrollamount?: string | number;
          direction?: string;
          behavior?: string;
          loop?: string | number;
        },
        HTMLElement
      >;
    }
  }
}
