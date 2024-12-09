import React, { ReactElement, ReactNode } from 'react';
import Header from './Header';

export interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <div>
      <Header />
      <main className="layout">{children}</main>
    </div>
  );
}
