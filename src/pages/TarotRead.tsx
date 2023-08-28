import { useState } from "react";
import TarotInfoCard from "../components/TarotInfoCard";
import Button from "../components/Button";
import data from "../data/tarotCardData";
import "@fontsource/merriweather";
import TarotFront from "../components/TarotFront";
import { useNavigate } from "react-router-dom";
import useDisplayTarotInfo from "../hooks/displayTarotInfo";
import Menu from "../components/Menu";
import { styled } from "@mui/system";
import { DialogContainer } from "../components/StyledElements/DialogContainer";
import { DialogContent } from "../components/StyledElements/DialogContent";

const FullPageContainer = styled("div")(({ theme }) => ({
  background: "#E3EAD1",
  width: "100%",
  minHeight: "100vh",
  height: "100%",
  padding: "25px 0",
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const TarotCardContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 30,
  margin: "25px 0",
}));

function TarotRead() {
  const navigate = useNavigate();
  const [randomTarotNumbers, setRandomTarotNumbers] = useState<number[]>([]);
  const [showTarotInfo, setShowTarotInfo] = useState(false);
  const [showNumber, showHide, setTarotInfo, setShowHide] =
    useDisplayTarotInfo(0);
  const [lengthOfTarotRead, setLengthOfTarotRead] = useState(0);

  const randomNumbers: number[] = [];

  function getCards(lengthOfRead: number) {
    setLengthOfTarotRead(lengthOfRead);

    const arrayLength = data.tarotDeck.length;

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
    setShowHide(true);
  }

  // a function to pull the right about of cards but only display them cardback face up.
  const cardsNotRevealed = randomTarotNumbers.map((tarotFront, index) => {
    return (
      <TarotFront
        cardNumber={0}
        width={200}
        key={tarotFront.toString()}
        onClick={() => revealTarotInformation(data.tarotDeck[tarotFront].id)}
        imageSrc={data.tarotDeck[0].imageFileName}
      />
    );
  });

  function updateStateOfCard(newNum: number) {
    setShowTarotInfo(true);
    revealTarotInformation(newNum);
  }

  const cardsRevealed = randomTarotNumbers.map((tarotFront) => {
    console.log(tarotFront);
    return (
      <TarotFront
        displayToolTip={true}
        cardNumber={tarotFront}
        width={200}
        key={data.tarotDeck[tarotFront].id + "-cardsRevealed"}
        imageSrc={data.tarotDeck[tarotFront].imageFileName}
        onClick={() => updateStateOfCard(tarotFront)}
      />
    );
  });

  const clearMyTarotRead = () => {
    setRandomTarotNumbers([]);
  };

  const buttonInfo = [
    { buttonname: "Pull One card", cardreadLength: 1 },
    { buttonname: "Three Card Read", cardreadLength: 3 },
    { buttonname: "Five Card Read", cardreadLength: 5 },
    { buttonname: "Nine Card Read", cardreadLength: 9 },
  ];
  const tarotReadButtons = buttonInfo.map((cardRead) => {
    return (
      <Button
        key={cardRead.cardreadLength}
        buttonName={cardRead.buttonname}
        onClick={() => {
          getCards(cardRead.cardreadLength);
        }}
      ></Button>
    );
  });
  return (
    <>
      {showTarotInfo && (
        <DialogContainer open>
          <DialogContent>
            <Button
              buttonName="X"
              onClick={() => setShowTarotInfo(false)}
              style={{
                borderRadius: "100px",
                width: "34px",
                height: "34px",
                position: "absolute",
                right: "-10px",
                top: "-10px",
              }}
            ></Button>
            <TarotInfoCard {...data.tarotDeck[showNumber]} />
          </DialogContent>
        </DialogContainer>
      )}
      {/* modal */}

      <Menu />
      <FullPageContainer>
        <ButtonContainer>{tarotReadButtons}</ButtonContainer>

        {!showHide && (
          <TarotCardContainer>{cardsNotRevealed}</TarotCardContainer>
        )}
        {showHide && randomTarotNumbers[0] !== 0 && (
          <div>
            <TarotCardContainer>{cardsRevealed}</TarotCardContainer>
          </div>
        )}
        {showHide ||
          (randomTarotNumbers[0] && (
            <Button
              style={{ margin: "auto" }}
              buttonName="Reveal Cards"
              onClick={() => setTarotInfo(showNumber)}
            ></Button>
          ))}

        {showHide && randomTarotNumbers[0] && (
          <Button
            style={{ margin: "auto" }}
            buttonName="Refresh My Tarot Read"
            onClick={() => clearMyTarotRead()}
          ></Button>
        )}
      </FullPageContainer>
    </>
  );
}

export default TarotRead;
