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

const StyledPurrlaroide = styled("div")(({ theme }) => ({
  display: "grid",
  gap: "50px",
  padding: "50px",
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
  margin: "auto",
  gap: "10px",
  width: "90%",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "center",
  },
}));

const SuitDescription = styled("div")(({ theme }) => ({
  margin: "0 50px ",
  fontStyle: "italic",
}));
export const Deck = () => {
  const [showNumber, showHide, setTarotInfo] = useDisplayTarotInfo(0);

  const [selectedSuit, setSelectedState] = useState<string | null>(null);
  const [descriptionOfSuit, setDescription] = useState("");

  function filterBySuit(data: MyTarotProps[]) {
    return data.filter((card) => card.suit === selectedSuit);
  }
  function grabSelectedSuit(e: React.MouseEvent<HTMLButtonElement>) {
    const selectedSuit = e.currentTarget.value;
    setDescription(selectedSuit);
    setSelectedState(selectedSuit);
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
          key={uuidv4()}
          imageSrc={tarotCard.imageFileName}
          onClick={() =>
            revealTarotInformation(data.tarotDeck[tarotCard.id].id)
          }
        />
      );
    }
  );

  return (
    <div>
      <ButtonContainer>
        <Button
          value="Major"
          buttonName="Major"
          onClick={grabSelectedSuit}
        ></Button>
        <Button
          value="Cups"
          buttonName="Cups"
          onClick={grabSelectedSuit}
        ></Button>
        <Button
          value="Pentacles"
          buttonName="Pentacles"
          onClick={grabSelectedSuit}
        ></Button>
        <Button
          value="Swords"
          buttonName="Swords"
          onClick={grabSelectedSuit}
        ></Button>
        <Button
          value="Wands"
          buttonName="Wands"
          onClick={grabSelectedSuit}
        ></Button>
      </ButtonContainer>
      <SuitDescription>{descriptionOfSuit}</SuitDescription>
      <StyledPurrlaroide> {selectedCards} </StyledPurrlaroide>

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
    </div>
  );
};
// arthvadrr: Probably want to utilize state, then have buttons update state, and then render components conditionally based on that state
