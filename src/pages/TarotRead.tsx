import { useState,useEffect, useCallback } from "react";
import TarotCard from "../components/TarotCardDetails";
import Button from "../components/Button";
import data from "../data/tarotCardData";
import "@fontsource/merriweather";
import TarotFront from "../components/TarotCard";
import { useNavigate } from "react-router-dom";
import useDisplayTarotInfo from "../hooks/displayTarotInfo";
import Menu from "../components/Menu";
import { v4 as uuidv4 } from "uuid";

function TarotRead() {
  // Allows navigation to other pages.
  const navigate = useNavigate();

  // These three variables are for setting the state of each card when a read is generated.

  //** IDEA FOR TONIGHT- Possible make array as big as biggest option of card pull? */

  const [randomTarotNumbers, setRandomTarotNumbers] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
const [shouldBe, setShouldBe] = useState(false);
  // this is us pulling in the hook from displayTarotInfo. Show number is 0, showHide is set as false and setTarotInfo is a function that shows and hides the tarot info on a click.
  const [showNumber, showHide, setTarotInfo] = useDisplayTarotInfo(0);

  const [lengthOfTarotRead, getLengthOfTarotRead] = useState(0);
//this ussEffect is use to be depend on whe you selecte the lenght of read otherwise it will 
  // it always lag by one 

   useEffect(() => {
     //this state is to make sure  that when you first start there back of the card are set to zero and not fire the function
      if (shouldBe) {
        getOneCard(lengthOfTarotRead);
      }
  }, [lengthOfTarotRead]);
  const randomNumbers: number[] = [];
  function getOneCard(lengthOfRead: number) {
    setShouldBe(true);
    getLengthOfTarotRead(lengthOfRead);
    // Looking at the length of the amount of cards to choose from in the tarot deck
    const arrayLength = data.tarotDeck.length;
    // creating a while loop that executes until the randomNumbers array is filled above with three different numbers.
    while (randomNumbers.length < lengthOfTarotRead) {
      let randomNum = Math.floor(Math.random() * arrayLength - 1) + 1;
      if (!randomNumbers.includes(randomNum) && randomNum !== 0) {
        randomNumbers.push(randomNum);
      }
    }
    setRandomTarotNumbers(randomNumbers);
  }
  // Function that shows the card clicked by taking in the card number and updating state of setShowNumber2
  function revealTarotInformation(cardNumber: number) {
    setTarotInfo(cardNumber);
  }
  const pullThreeCards = randomTarotNumbers.map((tarotFront, index) => {
    return (
      <TarotFront
        key={uuidv4()}
        onClick={() => revealTarotInformation(data.tarotDeck[tarotFront].id)}
        imageSrc={data.tarotDeck[tarotFront].imageFileName}
      />
    );
  });

  // const buttonInfo = [
  //   { buttonName: "Home", urlRedirect: "/" },
  //   { buttonName: "Get a Tarot Read", urlRedirect: "/tarotRead" },
  //   { buttonName: "View All Cards", urlRedirect: "/Deck" },

  // const cardReadButtons = [1, 3, 5, 9];
  const buttonInfo = [
    { buttonname: "Pull One card", cardreadLength: 1 },
    { buttonname: "Three Card Read", cardreadLength: 3 },
    { buttonname: "Five Card Read", cardreadLength: 5 },
    { buttonname: "Nine Card Read", cardreadLength: 9 },
  ];
  const tarotReadButtons = buttonInfo.map((cardRead) => {
    return (
      <Button
      key={cardRead.buttonname}
        buttonName={cardRead.buttonname}
        onClick={() => getOneCard(cardRead.cardreadLength)}
      ></Button>
    );
  });

  return (
    <div className="h-[1000px] flex flex-col justify-center items-center">
      <Button buttonName="Home" onClick={() => navigate("/")}></Button>
      <Button onClick={() => getOneCard} buttonName="Generate Tarot Read" />
      {tarotReadButtons}
      <div className="w-9/12 contents">
        <img className=" max-w-6xl mb-[-600px] mr-6" src="/Art/matt.png"></img>
        <div className=" flex justify-center  max-w-6xl mt-12 ">{pullThreeCards}</div>
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
      <Menu />
    </div>
  );
}

export default TarotRead;
