import React, { ReactNode } from 'react';

export type SvgProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Svg({ children }: SvgProps) {
  return (
    <div>
      {children}
    </div>
  );
}
