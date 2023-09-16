import CardData from "../data/tarotCardData";
import { styled } from "@mui/system";
import ICatProps from "../types/CatProps";

const TarotContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  margin: "auto",
  width: "1000px",
  background: "pink",
});
const MappedCard = styled("img")({
  width: "200px",
});

const AppearsOnTheseCards = ({ data }: ICatProps) => {
  const displayTheseCards = data.appearsOnCards;

  const cardsToDisplay = CardData.tarotDeck.map((card) => {
    if (displayTheseCards.includes(card.id)) {
      return <MappedCard src={card.imageFileName} key={card.id} />;
    }
  });

  return <TarotContainer>{cardsToDisplay}</TarotContainer>;
};

export default AppearsOnTheseCards;
