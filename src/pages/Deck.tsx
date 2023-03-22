import tarotCardData from "../data/tarotCardData";
import TarotCard from "../components/TarotCard";
console.log(tarotCardData.tarotDeck);

const onlyTarotFronts = tarotCardData.tarotDeck.slice(1);
const tarotDeck = onlyTarotFronts.map((tarotCard, index) => {
  return <TarotCard imageSrc={tarotCard.imageFileName} onClick={() => {}} />;
});
export const Deck = () => {
  return <div>{tarotDeck}</div>;
};
