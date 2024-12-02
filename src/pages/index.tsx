import React, {ReactElement} from "react";
export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}


const Header = (): ReactElement=> {
  return (<div className="header"> This is Header  </div>)
}