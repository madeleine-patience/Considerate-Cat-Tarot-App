import tarotCardData from "../data/tarotCardData";
import TarotCard from "../components/TarotCard";
import MyTarotProps from "../types/Tarot.type";
import { useState } from "react";
import Button from "../components/Button";

export const Deck = () => {
  const [selectedSuit, setSelectedState] = useState("Major");
  console.log(selectedSuit);
  function filterBySuit(data: MyTarotProps[]) {
    return data.filter((card) => card.suit === selectedSuit);
  }

  const removeFirstCard = tarotCardData.tarotDeck.slice(1);
  const tarotDeck = removeFirstCard.map((tarotCard, index) => {
    return <TarotCard imageSrc={tarotCard.imageFileName} onClick={() => {}} />;
  });

  const majors = filterBySuit(removeFirstCard).map((tarotCard, index) => {
    return <TarotCard imageSrc={tarotCard.imageFileName} onClick={() => {}} />;
  });

  return (
    <div>
      <Button
        buttonName="Major"
        onClick={() => console.log(filterBySuit(tarotCardData.tarotDeck))}
      ></Button>
      {/* <div>{tarotDeck}</div> */}
      {majors}
    </div>
  );
};

// arthvadrr: Probably want to utilize state, then have buttons update state, and then render components conditionally based on that state
