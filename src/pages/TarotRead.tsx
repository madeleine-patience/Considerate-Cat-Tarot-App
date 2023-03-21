
import { useState } from "react";
import TarotCard from "../components/TarotCard";
import Button from "../components/Button";
import data from "../data/tarotCardData";
import "@fontsource/merriweather";
import TarotFront from "../components/TarotFront";
import React from "react";



function TarotRead() {
  const [randomTarotNumber0, setRandomTarotNumber0] = useState(0);
  const [randomTarotNumber1, setRandomTarotNumber1] = useState(0);
  const [randomTarotNumber2, setRandomTarotNumber2] = useState(0);
  let randomNumbers: number[] = [];
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
  const randomNums = [
    randomTarotNumber0,
    randomTarotNumber1,
    randomTarotNumber2,
  ];
  const [showHide, setShowHide] = React.useState(false);
  const [showNumber, setShowNumber] = React.useState(0);
  const [typeOfRandom, setTypeOfRandom] = React.useState(randomTarotNumber0);

  function displayTarotInfo(random: number) {
    setShowHide(!showHide);
    setShowNumber(random);
  }
  const mappedTarotFront = randomNums.map((tarotFront, index) => {
    return (
      <TarotFront
        onClick={() => displayTarotInfo(tarotFront)}
        imageSrc={data.tarotDeck[tarotFront].imageFileName}
      ></TarotFront>
    );
  });
  return (
    <div className="h-[1000px] flex flex-col justify-center items-center">
      <Button onClick={() => getOneCard()} buttonName="Generate Tarot Read" />

      <div className=" ">
        <img className=" max-w-6xl mb-[-600px] mr-6" src="/Art/matt.png"></img>

        <div className=" flex justify-center ">{mappedTarotFront}</div>

        {showHide && randomTarotNumber0 !== 0 && (
          <div>
            <div className="mt-[-450px] flex flex-row mx-auto justify-center  ">
              <TarotCard data={data.tarotDeck[showNumber]} />
            </div>
            <div className="m-10">
              {" "}
              <Button
                buttonName="Close"
                onClick={() => displayTarotInfo(0)}
              ></Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TarotRead;
