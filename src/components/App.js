import React from "react";
import { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App({}) {
  const[sushiDbInfo, setSushiDbInfo] = useState([])
  const [money, setMoney] = useState(100)

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushiDbInfo) => {
        const updatedSushis = sushiDbInfo.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        setSushiDbInfo(updatedSushis);
      });
  }, []);

  function handleEatSushi(eatenSushi) {
    if (money >= eatenSushi.price) {
      const updatedSushis = sushiDbInfo.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
      });

      setSushiDbInfo(updatedSushis);
      setMoney((money) => money - eatenSushi.price);
    } else {
      alert("No free MEALS, Need more 💸");
    }
  }


  return (
    <div className="app">
      <SushiContainer sushiDbInfo={sushiDbInfo} eatSushi={handleEatSushi} />
      <Table money={money}/>
    </div>
  );
}

export default App;
