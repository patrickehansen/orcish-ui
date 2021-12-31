import React, { ReactNode } from 'react';

export type AccordionProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Accordion({ children }: AccordionProps) {
  return (
    <div>
      {children}
    </div>
  );
}
