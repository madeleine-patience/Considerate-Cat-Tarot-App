import { useState } from "react";
import TarotCardDetails from "../components/TarotCardDetails";
import Button from "../components/Button";
import data from "../data/tarotCardData";
import "@fontsource/merriweather";
import TarotFront from "../components/TarotCard";
import { useNavigate } from "react-router-dom";
import useDisplayTarotInfo from "../hooks/displayTarotInfo";
import Menu from "../components/Menu";
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
const TarotandMatt = styled("div")(({ theme }) => ({
  position: "relative",
  width: "1000px",
  margin: "auto",
}));

const Matt = styled("img")(({ theme }) => ({
  width: "100%",
}));

const TarotCardContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gap: "15px",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
}));

const DialogContainer = styled("dialog")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  width: "100%",
  height: "100%",
  backgroundColor: "transparent",
  backdropFilter: "blur(5px)",
  zIndex: "2",
}));

const DialogContent = styled("div")(({ theme }) => ({
  position: "relative",
}));

function TarotRead() {
  const navigate = useNavigate();
  const [randomTarotNumbers, setRandomTarotNumbers] = useState<number[]>([]);
  const [showTarotInfo, setShowTarotInfo] = useState(false);
  const [showNumber, showHide, setTarotInfo, setShowHide] =
    useDisplayTarotInfo(0);
  const [lengthOfTarotRead, setLengthOfTarotRead] = useState(0);

  interface RenderedStyle {
    gridTemplateColumns: string;
    width?: string;
  }
  let [renderedStyle, updateRenderedStyle] = useState<RenderedStyle>({
    gridTemplateColumns: "auto",
    width: "100%",
  });

  const randomNumbers: number[] = [];

  function getCards(lengthOfRead: number) {
    let renderedStyle =
      lengthOfRead == 1
        ? updateRenderedStyle({ gridTemplateColumns: "auto", width: "20%" })
        : lengthOfRead == 3
        ? updateRenderedStyle({ gridTemplateColumns: "auto auto auto" })
        : updateRenderedStyle({
            gridTemplateColumns: "auto auto auto auto auto",
          });

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
        style={{ width: "100%" }}
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
      <Menu />
      {/* modal */}
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
            <TarotCardDetails data={data.tarotDeck[showNumber]} />
          </DialogContent>
        </DialogContainer>
      )}
      {/* modal */}

      <ButtonContainer>{tarotReadButtons}</ButtonContainer>

      <TarotandMatt>
        {!showHide && (
          <TarotCardContainer style={renderedStyle}>
            {cardsNotRevealed}
          </TarotCardContainer>
        )}
        {showHide && randomTarotNumbers[0] !== 0 && (
          <div>
            <TarotCardContainer style={renderedStyle}>
              {cardsRevealed}
            </TarotCardContainer>
          </div>
        )}
        <Matt src="/Art/matt.png"></Matt>
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
      </TarotandMatt>
    </>
  );
}

export default TarotRead;
