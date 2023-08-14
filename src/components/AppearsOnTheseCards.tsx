import CardData from "../data/tarotCardData";
import catData from "../data/cats";
import { styled } from "@mui/system";
import ICatProps from "../types/CatProps";

const TarotContainer = styled("div")({
  display: "flex",
  gap: "20px",
  width: 1000,
  margin: "auto",
  padding: 20,
});
const MappedCard = styled("div")({
  width: "200px",
  display: "flex",
});

const AppearsOnTheseCards = ({ data }: ICatProps) => {
  const displayTheseCards = data.appearsOnCards;

  const cardsToDisplay = CardData.tarotDeck.map((card) => {
    if (displayTheseCards.includes(card.id)) {
      return (
        <MappedCard>
          <img src={card.imageFileName} key={card.id} />
        </MappedCard>
      );
    }
  });

  return <TarotContainer>{cardsToDisplay}</TarotContainer>;
};

export default AppearsOnTheseCards;
