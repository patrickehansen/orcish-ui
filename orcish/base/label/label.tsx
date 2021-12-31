import React, { ReactNode } from 'react';

export type LabelProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Label({ children }: LabelProps) {
  return (
    <div>
      {children}
    </div>
  );
}
