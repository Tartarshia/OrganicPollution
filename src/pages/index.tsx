import React, { ReactElement } from 'react';
export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}

const Header = (): ReactElement => {
  return (
    <>
      <div className="navigation">
        <div className="header"> Header </div>
      </div>
    </>
  );
};
