import { useState } from "react";
import "./App.css";
import TarotCard from "./components/TarotCard";
import Button from "./components/Button";
import data from "./data/tarotCardData";
import "@fontsource/merriweather";
import TarotFront from "./components/TarotFront";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import CatInfoCard from "./components/CatInfoCard";
import SelectedCat from "./components/SelectedCatinfo";
import catData from "./data/cats";
// SssnakePliskin: is there a card cleansing button?
// :-)

// linxdoom: yep you can create some form of an overlay over the card when you click them so it just occupies the space above it. so you can click multiple cards and it would still be visible

// 1-Month Subscribernight815: Extreme Backseating: 1. create a variable to hold the selected index 2. add if around <SelectedCat> tag to hide the element when index is not defined 3. update displayTarotInfo to update selected index 4. ??? 5. Profit!

function App() {
  const [randomTarotNumber0, setRandomTarotNumber0] = useState(0);
  const [randomTarotNumber1, setRandomTarotNumber1] = useState(0);
  const [randomTarotNumber2, setRandomTarotNumber2] = useState(0);
  const randomNumbers: number[] = [];

  // random number generator for tarot read
  function getOneCard() {
    setShowHide(false);
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
  const [showHide, setShowHide] = React.useState(false);
  const [showNumber, setShowNumber] = React.useState(0);
  const [typeOfRandom, setTypeOfRandom] = React.useState(randomTarotNumber0);

  function displayTarotInfo(random: number) {
    setShowHide(!showHide);
    setShowNumber(random);
  }
  //
  // const catInfo= catData.cats.map((cat)=> <SelectedCat data={cat} />)

  return (
    <div>
      {/* <Routes>
        <Route path="/selectedCat" element={<SelectedCat />} />
      </Routes> */}

      <div className="static">
        <button>
          <Link to="/selectedCat"> HI </Link>{" "}
        </button>
        <Button onClick={() => getOneCard()} buttonName="Generate Tarot Read" />
        <div className=" flex justify-center ">
          <TarotFront
            onClick={() => displayTarotInfo(randomTarotNumber0)}
            imageSrc={data.tarotDeck[randomTarotNumber0].imageFileName}
          />
          <TarotFront
            onClick={() => displayTarotInfo(randomTarotNumber1)}
            imageSrc={data.tarotDeck[randomTarotNumber1].imageFileName}
          />
          <TarotFront
            onClick={() => displayTarotInfo(randomTarotNumber2)}
            imageSrc={data.tarotDeck[randomTarotNumber2].imageFileName}
          />
        </div>

        {/* <SelectedCat data={catData.cats[0]} /> */}

        {showHide && randomTarotNumber0 !== 0 && (
          <div className=" flex mx-auto justify-center  ">
            <TarotCard data={data.tarotDeck[showNumber]} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
