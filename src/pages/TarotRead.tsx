import { useState } from "react";
import TarotCard from "../components/TarotCardDetails";
import Button from "../components/Button";
import data from "../data/tarotCardData";
import "@fontsource/merriweather";
import TarotFront from "../components/TarotCard";
import React from "react";
import { useNavigate } from "react-router-dom";
import useDisplayTarotInfo from "../components/displayTarotInfo";

// One thing I noticed that you are using both state variables (from hooks and otherwise):

// const [showNumber, showHide, setTarotInfo]= useDisplayTarotInfo(0)
// const [showNumber2, setShowNumber2]= useState(0)

// Seems only one of those are required (in this case seems showNumber (1st one). When we are using custom hooks, you "transfer" existing state variables to that hook and use them instead.

// Great to know you are seeing the pattern. Did you get a chance to read that article tho?

function TarotRead() {
  // Allows navigation to other pages.
  const navigate = useNavigate();

  // These three variables are for setting the state of each card when a read is generated.
  const [randomTarotNumbers, setRandomTarotNumbers] = useState([0, 0, 0]);

  // this is us pulling in the hook from displayTarotInfo. Show number is 0, showHide is set as false and setTarotInfo is a function that shows and hides the tarot info on a click.
  const [showNumber, showHide, setTarotInfo] = useDisplayTarotInfo(0);
  const randomNumbers: number[] = [];
  function getOneCard() {
    // Looking at the length of the amount of cards to choose from in the tarot deck
    const arrayLength = data.tarotDeck.length;
    // creating a while loop that executes until the randomNumbers array is filled above with three different numbers.
    while (randomNumbers.length < 3) {
      let randomNum = Math.floor(Math.random() * arrayLength - 1) + 1;
      if (!randomNumbers.includes(randomNum) && randomNum !== 0) {
        randomNumbers.push(randomNum);
      }
      setRandomTarotNumbers([
        randomNumbers[0],
        randomNumbers[1],
        randomNumbers[2],
      ]);
    }
  }
  // Function that shows the card clicked by taking in the card number and updating state of setShowNumber2
  function revealTarotInformation(cardNumber: number) {
    setTarotInfo(cardNumber);
  }

  const pullThreeCards = randomTarotNumbers.map((tarotFront, index) => {
    return (
      <TarotFront
        onClick={() => revealTarotInformation(data.tarotDeck[tarotFront].id)}
        imageSrc={data.tarotDeck[tarotFront].imageFileName}
      />
    );
  });

  return (
    <div className="h-[1000px] flex flex-col justify-center items-center">
      <Button buttonName="Home" onClick={() => navigate("/")}></Button>

      <Button onClick={getOneCard} buttonName="Generate Tarot Read" />

      <div className=" ">
        <img className=" max-w-6xl mb-[-600px] mr-6" src="/Art/matt.png"></img>

        <div className=" flex justify-center ">{pullThreeCards}</div>

        {showHide && randomTarotNumbers[0] !== 0 && (
          <div>
            <div className="mt-[-450px] flex flex-row mx-auto justify-center  ">
              <TarotCard data={data.tarotDeck[showNumber]} />
            </div>
            <div className="m-10">
              {" "}
              <Button
                buttonName="Close"
                onClick={() => setTarotInfo(showNumber)}
              ></Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TarotRead;
