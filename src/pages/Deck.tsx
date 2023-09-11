import React from "react";
import { useEffect, useRef, useReducer } from "react";
import tarotCardData from "../data/tarotCardData";
import TarotCard from "../components/TarotFront";
import MyTarotProps from "../types/Tarot.type";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import useDisplayTarotInfo from "../hooks/displayTarotInfo";
import TarotInfoCard from "../components/TarotInfoCard";
import data from "../data/tarotCardData";
import Menu from "../components/Menu";
import { styled } from "@mui/system";
import { DialogContainer } from "../components/StyledElements/DialogContainer";
import { DialogContent } from "../components/StyledElements/DialogContent";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import { TwoCardsStyled } from "../components/TwoCardsStyled";
import FlowerFooter from "../components/FlowerFooter";

const PageContainer = styled("div")(({ theme }) => ({
  margin: "50px",
  display: "flex",
  flexDirection: "column",
  gap: "50px",
}));

const TarotCardContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gap: "50px",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "auto auto",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "auto auto auto",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "auto auto auto auto",
  },
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
  gap: "10px",
  width: "90%",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "center",
  },
}));
const ButtonHolder = styled("div")(({ theme }) => ({}));
const SuitDescription = styled("div")(({ theme }) => ({
  fontStyle: "italic",
  maxWidth: "800px",
  margin: "auto",
  textAlign: "center",
}));

const StyledCardContainer = styled("div")(({ theme }) => ({
  margin: "auto",
  paddingLeft: 300,
  height: 300,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
export const Deck = () => {
  const [showNumber, showCard, setTarotInfo] = useDisplayTarotInfo(0);
  interface State {
    selectedSuit: string | null;
    showHide: boolean;
    descriptionOfSuit: string;
  }
  type Action =
    | { type: "SET_SELECTED_SUIT"; payload: string }
    | { type: "SHOW_HIDE" }
    | { type: "UPDATE_DESCRIPTION"; payload: string };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "SET_SELECTED_SUIT":
        return { ...state, selectedSuit: action.payload };
      case "SHOW_HIDE":
        return { ...state, showHide: !state.showHide };
      case "UPDATE_DESCRIPTION": {
        return { ...state, descriptionOfSuit: action.payload };
      }
      default:
        return state;
    }
  };
  const initialState = {
    selectedSuit: null,
    showHide: false,
    descriptionOfSuit:
      " There are five suits of cards in the Considerate Cat Tarot deck. Major, Cups, Wands, Pentacles and Swords. While each card means something different from the next, each card has a connection or meaning to the suit of which it belongs.",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const renderTitle = (selectedSuit: any) => {
    let description = "";

    if (selectedSuit === "Major") {
      description =
        "The major Arcana cards represent significant life events and spiritual lessons, reflecting powerful archetypal energies and themes that can profoundly impact one's journey of personal growth and self-discovery.";
    } else if (selectedSuit === "Cups") {
      description =
        "The suit of Cups represents emotions, relationships, intuition, and creativity. It signifies matters of the heart, love, compassion, and the exploration of one's feelings and inner world.";
    } else if (selectedSuit === "Pentacles") {
      description =
        "The suit of Pentacles relates to material wealth, abundance, practicality, and the physical realm. It signifies financial matters, career, physical well-being, and the tangible aspects of life.";
    } else if (selectedSuit === "Swords") {
      description =
        "The suit of Swords represents intellect, thoughts, communication, and challenges. It signifies mental clarity, conflicts, decision-making, and the power of the mind to cut through illusions and gain insight.";
    } else if (selectedSuit === "Wands") {
      description =
        "The suit of Wands symbolizes energy, ambition, passion, and personal growth. It signifies creativity, inspiration, willpower, and the pursuit of goals, often related to career or personal projects.";
    }

    dispatch({ type: "SET_SELECTED_SUIT", payload: selectedSuit });
    dispatch({ type: "UPDATE_DESCRIPTION", payload: description });
  };
  function filterBySuit(data: MyTarotProps[]) {
    return data.filter((card) => card.suit === state.selectedSuit);
  }

  function grabSelectedSuit(e: React.MouseEvent<HTMLButtonElement>) {
    const selectedSuit = e.currentTarget.value;
    renderTitle(selectedSuit);
  }

  function revealTarotInformation(cardNumber: number) {
    setTarotInfo(cardNumber);
  }
  const removeFirstCard = tarotCardData.tarotDeck.slice(1);

  const navigate = useNavigate();
  const selectedCards = filterBySuit(removeFirstCard).map(
    (tarotCard, index) => {
      return (
        <TarotCard
          width={250}
          key={index}
          imageSrc={tarotCard.imageFileName}
          onClick={() =>
            revealTarotInformation(data.tarotDeck[tarotCard.id].id)
          }
        />
      );
    }
  );
  const buttonVals = [
    {
      value: "Major",
      buttonName: "Major",
    },
    {
      value: "Cups",
      buttonName: "Cups",
    },
    {
      value: "Wands",
      buttonName: "Wands",
    },
    {
      value: "Pentacles",
      buttonName: "Pentacles",
    },
    {
      value: "Swords",
      buttonName: "Swords",
    },
  ];
  const mappedButtons = buttonVals.map((button) => (
    <Button
      key={button.value}
      value={button.value}
      buttonName={button.buttonName}
      onClick={grabSelectedSuit}
    />
  ));

  const showHideMenuButton = () => {
    dispatch({ type: "SHOW_HIDE" });
  };

  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setTarotInfo(0);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setTarotInfo]);

  return (
    <ThemeProvider theme={theme}>
      {showCard && (
        <div ref={ref}>
          <DialogContainer open>
            <DialogContent>
              <ButtonHolder>
                <Button
                  buttonName="X"
                  onClick={() => setTarotInfo(showNumber)}
                  style={{
                    width: "34px",
                    height: "34px",
                    position: "absolute",
                    right: 15,
                    top: 15,
                    border: "2px solid #d47daf",
                    borderRadius: 0,
                    fontFamily: theme.typography.h2.fontFamily,
                    color: "#d47daf",
                    zIndex: 3,
                  }}
                ></Button>
              </ButtonHolder>
              <TarotInfoCard {...data.tarotDeck[showNumber]} />
            </DialogContent>
          </DialogContainer>
        </div>
      )}
      <Menu />
      <PageContainer>
        <ButtonContainer>{mappedButtons}</ButtonContainer>
        <SuitDescription>{state.descriptionOfSuit}</SuitDescription>
        {!state.selectedSuit && (
          <StyledCardContainer>
            <TwoCardsStyled
              amountOfCards={3}
              selectedCard={[15, 1, 23, 2, 3, 0, 54]}
            />
          </StyledCardContainer>
        )}
        <TarotCardContainer> {selectedCards} </TarotCardContainer>

        {/* What were working on  */}
      </PageContainer>
      <FlowerFooter />
    </ThemeProvider>
  );
};
// arthvadrr: Probably want to utilize state, then have buttons update state, and then render components conditionally based on that state

// VIP2-Month Subscriber (2-Month Badge)cheer 1arthvadrr: I'd say figure out when your state is being updated and you'll find the issue
