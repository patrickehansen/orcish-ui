import React, { ReactNode } from 'react';

export type DivProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Div({ children }: DivProps) {
  return (
    <div>
      {children}
    </div>
  );
}
