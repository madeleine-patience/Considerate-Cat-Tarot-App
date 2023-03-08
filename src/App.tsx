import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TarotCard from "./components/TarotCard";
import Button from "./components/Button";
import data from "./data/tarotCardData";
import "@fontsource/merriweather";
import TarotBack from "./components/TarotBack";
import TarotFront from "./components/TarotFront";
import React from "react";
let tarotData = data.tarotDeck.map((card, index) => {
  return <TarotCard data={card} />;
});

function App() {
  const [randomTarotNumber0, setRandomTarotNumber0] = useState(0);
  const [randomTarotNumber1, setRandomTarotNumber1] = useState(0);
  const [randomTarotNumber2, setRandomTarotNumber2] = useState(0);
  const randomNumbers: number[] = [];

  // random number generator for tarot read
  function getOneCard() {
    const arrayLength = data.tarotDeck.length;

    while (randomNumbers.length < 3) {
      let randomNum = Math.floor(Math.random() * arrayLength - 1) + 1;
      if (!randomNumbers.includes(randomNum) && randomNum !== 0) {
        randomNumbers.push(randomNum);
      }
      setRandomTarotNumber0(randomNumbers[0]);
      setRandomTarotNumber1(randomNumbers[1]);
      setRandomTarotNumber2(randomNumbers[2]);
    }
  }
  let [showHide, setShowHide] = React.useState(false);
  let [typeOfRandom, setTypeOfRandom] = React.useState(randomTarotNumber0);

  function displayTarotInfo() {
    setShowHide(!showHide);
  }

  return (
    <>
      <Button onClick={() => getOneCard()} buttonName="Generate Tarot Read" />
      <div className=" flex justify-center ">
        <TarotFront
          onClick={displayTarotInfo}
          imageSrc={data.tarotDeck[randomTarotNumber0].imageFileName}
        />
        <TarotFront
          onClick={displayTarotInfo}
          imageSrc={data.tarotDeck[randomTarotNumber1].imageFileName}
        />
        <TarotFront
          onClick={displayTarotInfo}
          imageSrc={data.tarotDeck[randomTarotNumber2].imageFileName}
        />
      </div>
      {showHide && (
        <div className=" flex mx-auto ">
          <TarotCard data={data.tarotDeck[randomTarotNumber0]} />
        </div>
      )}
    </>
  );
}

export default App;
