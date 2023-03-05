import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TarotCard from "./components/TarotCard";
import Button from "./components/Button";
import data from "./data/tarotCardData";
import "@fontsource/merriweather";
import back from "./artwork";
import TarotBack from "./components/TarotBack";

let tarotData = data.tarotDeck.map((card, index) => {
  return <TarotCard data={card} />;
});

// Prime GamingGustek89: generally deck dealing algorithms, you shuffle the array of cards first and the you just pop(). but in javascript doesn't have fair shuffle function out of box.

// Prime Gaminghugodos: You need to splice and provide a second argument

// https://gist.github.com/joshwashywash/98303ea29775feb052b1c722adf921d0
let indexes: number[] = [];
for (let i = 1; i < data.tarotDeck.length; i++) {
  indexes.push(i);
}
console.log(indexes);
function App() {
  const [randomTarotNumber, setRandomTarotNumber] = useState(0);
  const [randomTarotNumber1, setRandomTarotNumber1] = useState(0);
  const [randomTarotNumber2, setRandomTarotNumber2] = useState(0);

  function getOneCard() {
    const arrayLength = data.tarotDeck.length;
    setRandomTarotNumber(Math.floor(Math.random() * arrayLength));
    setRandomTarotNumber1(Math.floor(Math.random() * arrayLength));
    setRandomTarotNumber2(Math.floor(Math.random() * arrayLength));

    indexes = indexes.splice(randomTarotNumber, 1);
    indexes = indexes.splice(randomTarotNumber2, 1);
  }

  function flipCard() {}

  return (
    <>
      <Button onClick={() => getOneCard()} buttonName="Generate Tarot Read" />
      <div className=" flex mx-auto ">
        <div className="App">{tarotData[randomTarotNumber]}</div>
        <div className="App">{tarotData[randomTarotNumber1]}</div>
        <div className="App">{tarotData[randomTarotNumber2]}</div>
      </div>

      <div className=" flex mx-auto ">
        {/* <TarotBack />
        <TarotBack />
        <TarotBack /> */}
      </div>
    </>
  );
}

export default App;
