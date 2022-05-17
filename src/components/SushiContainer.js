import React from "react";
import { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";



function SushiContainer({sushiDbInfo, eatSushi}) {
  const [sushiIndex, setSushiIndex] = useState(0);

  const sushiComponents = sushiDbInfo
    .slice(sushiIndex, sushiIndex + 4)
    .map((sushiDbInfo) => (
      <Sushi key={sushiDbInfo.id} sushiDbInfo={sushiDbInfo} eatSushi={eatSushi} />
    ));
  
  function handleClickMore() {
    setSushiIndex((setSushiIndex) => (sushiIndex + 4) % sushiDbInfo.length)
  }
    

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onClickMore={handleClickMore}  />
    </div>
  );
}

export default SushiContainer;
