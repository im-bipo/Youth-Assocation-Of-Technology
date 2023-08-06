import React from "react";
import LeftSide from './component/home/LeftSide'
import RightSide from "./component/home/RightSide";

function Home() {
  return (
   <div className="flex h-[40rem]" >
    <div className="w-1/3 bg-blue-300">
    <LeftSide/>
    </div>
    <div className="w-2/3">
    <RightSide/>
    </div>
   </div>
  );
}

export default Home;
