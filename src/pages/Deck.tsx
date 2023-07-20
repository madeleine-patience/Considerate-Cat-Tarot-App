import tarotCardData from "../data/tarotCardData";
import TarotCard from "../components/TarotCard";
import MyTarotProps from "../types/Tarot.type";
import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import useDisplayTarotInfo from "../hooks/displayTarotInfo";
import TarotCardDetails from "../components/TarotCardDetails";
import data from "../data/tarotCardData";
import Menu from "../components/Menu";
import { v4 as uuidv4 } from "uuid";
import { styled } from "@mui/system";
import TarotFront from "../components/TarotCard";

const PageContainer = styled("div")(({ theme }) => ({
  margin: "50px",
  display: "flex",
  flexDirection: "column",
  gap: "50px",
}));

const CardSpreadContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "500px",
  margin: "auto",
}));

const TarotCardContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gap: "50px",
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

const TarotCardStyled1 = styled("div")(({ theme }) => ({
  transform: "rotate(-0.1turn)",
}));
const TarotCardStyled2 = styled("div")(({ theme }) => ({
  transform: "rotate(0.03turn)",
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  gap: "10px",
  width: "90%",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "center",
  },
}));

const SuitDescription = styled("div")(({ theme }) => ({
  fontStyle: "italic",
  maxWidth: "800px",
  margin: "auto",
  textAlign: "center",
}));

export const Deck = () => {
  const [showNumber, showHide, setTarotInfo] = useDisplayTarotInfo(0);
  const [selectedSuit, setSelectedState] = useState<string | null>(null);
  const [descriptionOfSuit, setDescription] = useState(
    " There are five suits of cards in the Considerate Cat Tarot deck. Major, Cups, Wands, Pentacles and Swords. While each card means something different from the next, each card has a connection or meaning to the suit of which it belongs."
  );

  const renderTitle = () => {
    if (selectedSuit === "Major") {
      setDescription(
        "The major Arcana cards represent significant life events and spiritual lessons, reflecting powerful archetypal energies and themes that can profoundly impact one's journey of personal growth and self-discovery."
      );
    }
    if (selectedSuit === "Cups") {
      setDescription(
        "The suit of Cups represents emotions, relationships, intuition, and creativity. It signifies matters of the heart, love, compassion, and the exploration of one's feelings and inner world."
      );
    }
    if (selectedSuit === "Pentacles") {
      setDescription(
        "The suit of Pentacles relates to material wealth, abundance, practicality, and the physical realm. It signifies financial matters, career, physical well-being, and the tangible aspects of life."
      );
    }
    if (selectedSuit === "Swords") {
      setDescription(
        "The suit of Swords represents intellect, thoughts, communication, and challenges. It signifies mental clarity, conflicts, decision-making, and the power of the mind to cut through illusions and gain insight."
      );
    }
    if (selectedSuit === "Wands") {
      setDescription(
        "The suit of Wands symbolizes energy, ambition, passion, and personal growth. It signifies creativity, inspiration, willpower, and the pursuit of goals, often related to career or personal projects."
      );
    }
  };
  function filterBySuit(data: MyTarotProps[]) {
    return data.filter((card) => card.suit === selectedSuit);
  }

  function grabSelectedSuit(e: React.MouseEvent<HTMLButtonElement>) {
    const selectedSuit = e.currentTarget.value;
    setSelectedState(selectedSuit);
    renderTitle();
  }

  function revealTarotInformation(cardNumber: number) {
    setTarotInfo(cardNumber);
  }
  const removeFirstCard = tarotCardData.tarotDeck.slice(1);

  const navigate = useNavigate();
  console.log(selectedSuit);
  const selectedCards = filterBySuit(removeFirstCard).map(
    (tarotCard, index) => {
      return (
        <TarotCard
          key={uuidv4()}
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
      value={button.value}
      buttonName={button.buttonName}
      onClick={grabSelectedSuit}
    />
  ));

  return (
    <PageContainer>
      <ButtonContainer>{mappedButtons}</ButtonContainer>
      <SuitDescription>{descriptionOfSuit}</SuitDescription>

      {!selectedSuit && (
        <CardSpreadContainer>
          <TarotCardStyled1>
            <TarotFront imageSrc={data.tarotDeck[0].imageFileName} />
          </TarotCardStyled1>
          <TarotCardStyled2>
            <TarotFront imageSrc={data.tarotDeck[0].imageFileName} />
          </TarotCardStyled2>
        </CardSpreadContainer>
      )}

      <TarotCardContainer> {selectedCards} </TarotCardContainer>

      {showHide && (
        <div>
          <div>
            <TarotCardDetails data={data.tarotDeck[showNumber]} />
          </div>
          <div>
            <Button
              buttonName="Close"
              onClick={() => setTarotInfo(showNumber)}
            ></Button>
          </div>
        </div>
      )}
      <Menu />
    </PageContainer>
  );
};
// arthvadrr: Probably want to utilize state, then have buttons update state, and then render components conditionally based on that state
