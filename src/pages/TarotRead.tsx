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
import { styled } from "@mui/system";

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  margin: "15px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const TarotCardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "15px",
  gap: "15px",
  justifyContent: "center",
}));

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
    console.log(randomNumbers);
    setRandomTarotNumbers(randomNumbers);
  }

  // Function that shows the card clicked by taking in the card number and updating state of setShowNumber2
  function revealTarotInformation(cardNumber: number) {
    setTarotInfo(cardNumber);
  }

  // a function to pull the right about of cards but only display them cardback face up.

  const displayTarotCardBacks = randomTarotNumbers.map((tarotFront, index) => {
    return (
      <TarotFront
        style={{ width: 200 }}
        key={uuidv4()}
        onClick={() => revealTarotInformation(data.tarotDeck[tarotFront].id)}
        imageSrc={data.tarotDeck[0].imageFileName}
      />
    );
  });
  // const pullThreeCards = randomTarotNumbers.map((tarotFront, index) => {
  //   return (
  //     <TarotFront
  //       key={uuidv4()}
  //       onClick={() => revealTarotInformation(data.tarotDeck[tarotFront].id)}
  //       imageSrc={data.tarotDeck[tarotFront].imageFileName}
  //     />
  //   );
  // });

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
    <>
      <Menu />
      <div>
        {/* <Button buttonName="Home" onClick={() => navigate("/")}></Button> */}
        <ButtonContainer>{tarotReadButtons}</ButtonContainer>
        <div>
          <img></img>
          <TarotCardContainer>{displayTarotCardBacks}</TarotCardContainer>
          {showHide && randomTarotNumbers[0] !== 0 && (
            <div>
              <div>
                <TarotCard data={data.tarotDeck[showNumber]} />
              </div>
              <div className="m-10">
                <Button
                  buttonName="Close"
                  onClick={() => setTarotInfo(showNumber)}
                ></Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TarotRead;
