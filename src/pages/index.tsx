import React,{ReactElement} from "react";
export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}


const Header = (): ReactElement=> {
  return (<div class="header"> This is Header  </div>)
}