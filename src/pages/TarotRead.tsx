import { useReducer } from "react";
import TarotInfoCard from "../components/TarotInfoCard";
import Button from "../components/Button";
import data from "../data/tarotCardData";
import "@fontsource/merriweather";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { styled } from "@mui/system";
import { DialogContainer } from "../components/StyledElements/DialogContainer";
import { DialogContent } from "../components/StyledElements/DialogContent";
import TarotCardWithFlip from "../components/TarotCardWithFlip";
import { Box } from "@mui/material";
const FullPageContainer = styled(Box)(({ theme }) => ({
  background: "#E3EAD1",
  width: "100%",
  minHeight: "100vh",
  height: "100%",
  padding: "25px 0",
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "15px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const TarotCardContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 30,
  margin: "25px 0",
}));

const StyledButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
}));
const FullButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: 600,
  alignItems: "center",
  gap: 20,
  margin: "auto",
}));

function TarotRead() {
  const navigate = useNavigate();

  interface State {
    showTarotInfo: boolean;
    lengthOfTarotRead: number;
    isFlipped: boolean;
    randomTarotNumbers: number[];
    showCatInfo: boolean;
    tarotNumber: number;
    revealCards: boolean;
  }
  type Action =
    | { type: "SHOW_TAROT_INFO" }
    | { type: "LENGTH_OF_TAROT_READ"; payload: number }
    | { type: "IS_FLIPPED" }
    | { type: "RANDOM_TAROT_NUMS"; payload: number[] }
    | { type: "SHOW_CAT_INFO" }
    | { type: "SET_TAROT_NUMBER"; payload: number }
    | { type: "REVEAL_CARDS" };

  const initialState = {
    showTarotInfo: false,
    lengthOfTarotRead: 0,
    isFlipped: true,
    randomTarotNumbers: [],
    showCatInfo: false,
    tarotNumber: 0,
    revealCards: true,
  };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "SHOW_TAROT_INFO":
        return { ...state, showTarotInfo: !state.showTarotInfo };
      case "LENGTH_OF_TAROT_READ":
        return { ...state, lengthOfTarotRead: action.payload };
      case "IS_FLIPPED":
        return { ...state, isFlipped: false };
      case "RANDOM_TAROT_NUMS":
        return { ...state, randomTarotNumbers: action.payload };
      case "SHOW_CAT_INFO":
        return { ...state, showCatInfo: !state.showCatInfo };
      case "SET_TAROT_NUMBER":
        return { ...state, tarotNumber: action.payload };
      case "REVEAL_CARDS":
        return { ...state, revealCards: !state.revealCards };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const randomNumbers: number[] = [];
  function generateCardRead(lengthOfRead: number) {
    dispatch({ type: "LENGTH_OF_TAROT_READ", payload: lengthOfRead });

    const arrayLength = data.tarotDeck.length;

    while (randomNumbers.length < lengthOfRead) {
      let randomNum = Math.floor(Math.random() * arrayLength - 1) + 1;
      if (!randomNumbers.includes(randomNum) && randomNum !== 0) {
        randomNumbers.push(randomNum);
      }
    }
    dispatch({ type: "REVEAL_CARDS" });
    dispatch({ type: "RANDOM_TAROT_NUMS", payload: randomNumbers });
  }

  function refreshTarotRead() {
    dispatch({ type: "RANDOM_TAROT_NUMS", payload: [] });
    state.isFlipped = true;
  }

  function displayTarotInfoModal(cardNumber: number) {
    console.log("hi");

    dispatch({ type: "SET_TAROT_NUMBER", payload: cardNumber });
    dispatch({ type: "SHOW_TAROT_INFO" });
  }

  const cardsRevealed = state.randomTarotNumbers.map(
    (tarotFront: number, index: number) => {
      return (
        <TarotCardWithFlip
          cardProps={{
            isFlipped: !state.isFlipped,
            transitionDelay: `${index / 2}s`,
          }}
          key={data.tarotDeck[tarotFront].id + "-cardsRevealed"}
          imageSrc={data.tarotDeck[tarotFront].imageFileName}
          onClick={() =>
            !state.isFlipped ? displayTarotInfoModal(tarotFront) : null
          }
        />
      );
    }
  );
  const buttonInfo = [
    {
      buttonname: "Pull One card",
      cardreadLength: 1,
      cardReadDescription:
        " This is a simple and direct reading often used for daily guidance or to gain clarity on a specific question. The single card can provide a straightforward answer or highlight the energy surrounding the querent (the person asking the question).",
    },
    {
      buttonname: "Three Card Read",
      cardreadLength: 3,
      cardReadDescription:
        ": This spread provides insight into the progression of events or situations. The first card represents the past influences or the root of the issue, the second card reveals the current situation, and the third card indicates the potential future outcome or direction.",
    },
    {
      buttonname: "Five Card Read",
      cardreadLength: 5,
      cardReadDescription:
        "This spread is a bit more detailed than the previous ones. The first card outlines the present situation or the question at hand. The next two cards suggest possible actions or paths to take. The last two cards forecast the short-term and long-term outcomes of the situation if the advice is heeded.",
    },
    {
      buttonname: "Nine Card Read",
      cardreadLength: 9,
      cardReadDescription:
        "A more in-depth spread, this can be viewed as an expanded version of the three card layout. Cards can represent a variety of aspects such as past, present, future, subconscious influences, personal feelings, external influences, hopes or fears, and the outcome. The positions' meanings can vary based on the reader's system.",
    },
  ];

  const tarotReadButtons = buttonInfo.map((cardRead) => {
    return (
      <FullButtonContainer key={cardRead.cardreadLength}>
        <StyledButtonContainer>
          <Button
            buttonName={cardRead.buttonname}
            onClick={() => {
              generateCardRead(cardRead.cardreadLength);
            }}
          ></Button>
        </StyledButtonContainer>
        {cardRead.cardReadDescription}
      </FullButtonContainer>
    );
  });
  return (
    <>
      {state.showTarotInfo && (
        <DialogContainer open>
          <DialogContent>
            <Button
              buttonName="X"
              onClick={() => dispatch({ type: "SHOW_TAROT_INFO" })}
              style={{
                borderRadius: "100px",
                width: "34px",
                height: "34px",
                position: "absolute",
                right: "-10px",
                top: "-10px",
              }}
            ></Button>
            <TarotInfoCard {...data.tarotDeck[state.tarotNumber]} />
          </DialogContent>
        </DialogContainer>
      )}

      <Menu />
      <FullPageContainer>
        {state.randomTarotNumbers.length === 0 && (
          <ButtonContainer>{tarotReadButtons}</ButtonContainer>
        )}

        <div>
          <TarotCardContainer>{cardsRevealed}</TarotCardContainer>
          <Button
            style={{ margin: "auto", marginBottom: 10 }}
            buttonName="Reveal Cards"
            onClick={() => dispatch({ type: "IS_FLIPPED" })}
          ></Button>
        </div>

        <Button
          style={{ margin: "auto" }}
          buttonName="Refresh My Tarot Read"
          onClick={() => refreshTarotRead()}
        ></Button>
      </FullPageContainer>
    </>
  );
}

export default TarotRead;
