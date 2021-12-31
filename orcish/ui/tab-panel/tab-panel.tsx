import React, { ReactNode } from 'react';

export type TabPanelProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function TabPanel({ children }: TabPanelProps) {
  return (
    <div>
      {children}
    </div>
  );
}
