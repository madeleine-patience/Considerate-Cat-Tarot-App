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

function App() {
  const [randomTarotNumber, setRandomTarotNumber] = useState(0);
  const [randomTarotNumber1, setRandomTarotNumber1] = useState(0);
  const [randomTarotNumber2, setRandomTarotNumber2] = useState(0);

  //define an empty array that will eventually receive 3 random numbers.
  const randomNumbers: number[] = [];

  function getOneCard() {
    //defeine array length
    const arrayLength = data.tarotDeck.length;

    //while loop to fill up the above array with three number that are neither 0 nor already in the array. If false, push to randomNumbers array.
    while (randomNumbers.length < 3) {
      let randomNum = Math.floor(Math.random() * arrayLength - 1) + 1;
      if (!randomNumbers.includes(randomNum) && randomNum !== 0) {
        randomNumbers.push(randomNum);
      }
      // update state with three new numbers for the tarot deck.
      setRandomTarotNumber(randomNumbers[0]);
      setRandomTarotNumber1(randomNumbers[1]);
      setRandomTarotNumber2(randomNumbers[2]);
    }
  }
  console.log(randomTarotNumber, randomTarotNumber1, randomTarotNumber2);

  return (
    <>
      <Button onClick={() => getOneCard()} buttonName="Generate Tarot Read" />
      <div className=" flex mx-auto ">
        <div className="App">{tarotData[randomTarotNumber]}</div>
        <div className="App">{tarotData[randomTarotNumber1]}</div>
        <div className="App">{tarotData[randomTarotNumber2]}</div>
      </div>

      <div className=" flex mx-auto ">
        <TarotBack />
        <TarotBack />
        <TarotBack />
      </div>
    </>
  );
}

export default App;
