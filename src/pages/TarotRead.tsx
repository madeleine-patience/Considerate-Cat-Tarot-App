import { useState } from "react";
import TarotCard from "../components/TarotCardDetails";
import Button from "../components/Button";
import data from "../data/tarotCardData";
import "@fontsource/merriweather";
import TarotFront from "../components/TarotCard";
import { useNavigate } from "react-router-dom";
import useDisplayTarotInfo from "../hooks/displayTarotInfo";
import Menu from "../components/Menu";
import { v4 as uuidv4 } from "uuid";
import TarotBack from "../components/TarotBack";
import FlippableCard from "../components/FlippableCard";

function TarotRead() {
  // Allows navigation to other pages.
  const navigate = useNavigate();

  // Getter and setter of 10 numbers all set at 0
  const [randomTarotNumbers, setRandomTarotNumbers] = useState<number[]>([]);
  // this is us pulling in the hook from displayTarotInfo. Show number is 0, showHide is set as false and setTarotInfo is a function that shows and hides the tarot info on a click.
  const [showNumber, showHide, setTarotInfo] = useDisplayTarotInfo(0);

  const [lengthOfTarotRead, setLengthOfTarotRead] = useState(0);

  const randomNumbers: number[] = [];
  function getCards(lengthOfRead: number) {
    setLengthOfTarotRead(lengthOfRead);
    // Looking at the length of the amount of cards to choose from in the tarot deck
    const arrayLength = data.tarotDeck.length;
    // creating a while loop that executes until the randomNumbers array is filled above with three different numbers.
    while (randomNumbers.length < lengthOfRead) {
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

  // a function to pull the right about of cards but only display them cardback face up.

  // Founder, 3-Month SubscriberVioletbunny: You can do something like { isFlipped && tarotFront } { !isFlipped && tarotBack } but I would do a ternary { isFlipped ? (<TarotFront>) : (<TarotBack>)
  const displayTarotCardBacks = randomTarotNumbers.map((tarotFront, index) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return isFlipped ? (
      <TarotFront
        key={uuidv4()}
        onClick={() => revealTarotInformation(data.tarotDeck[tarotFront].id)}
        imageSrc={data.tarotDeck[0].imageFileName}
      />
    ) : (
      <TarotBack
        key={uuidv4()}
        onClick={() => revealTarotInformation(data.tarotDeck[tarotFront].id)}
      />
    );
  });

  // I think you should create a .tsx file that holds TarotFront and TarotBack and then the parent will map the new Component

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
        onClick={() => {
          getCards(cardRead.cardreadLength);
        }}
      ></Button>
    );
  });

  return (
    <div className="h-[1000px] flex flex-col justify-center items-center">
      <Button buttonName="Home" onClick={() => navigate("/")}></Button>
      {tarotReadButtons}
      <FlippableCard
        message="Hello chat@!"
        pets={[
          { id: 1, name: "cat" },
          { id: 2, name: "turtle" },
          { id: 3, name: "fish" },
          { id: 4, name: "platapus" },
          { id: 5, name: "racoon" },
          { id: 6, name: "lizard" },
        ]}
      />
      <div className="w-9/12 contents">
        <img className=" max-w-6xl mb-[-600px] mr-6" src="/Art/matt.png"></img>
        <div className=" flex justify-center  max-w-6xl mt-12 ">
          {displayTarotCardBacks}
        </div>

        {/* Below is the showtarot info section         */}
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
