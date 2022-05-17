import React from "react";

function Sushi({sushiDbInfo, eatSushi}) {
  const {id, name,img_url, price, eaten} = sushiDbInfo

  ///handleEat click if present remove and decrement bal

  function handleEat() {
    if (!eaten) {
      eatSushi(sushiDbInfo)
    } else {
      alert("can not eat air");
    }

  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEat}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;

