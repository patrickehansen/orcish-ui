import React, { ReactNode } from 'react';

export type PProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function P({ children }: PProps) {
  return (
    <div>
      {children}
    </div>
  );
}
