import Link from 'next/link';
import { ReactElement } from 'react';

export default function Header(): ReactElement {
  return (
    <>
      <div className="menu">
        <div className="menu-item">
          <Link href="/insert"> 录入</Link>
        </div>
        <div className="menu-item"> Credit Card </div>
        <div className="menu-item"> Checking/Saving </div>
        <div className="menu-item"> Brokerage </div>
        <div className="menu-item"> 其他 </div>
      </div>
    </>
  );
}
