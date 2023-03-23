import tarotCardData from "../data/tarotCardData";
import TarotCard from "../components/TarotCard";
import MyTarotProps from "../types/Tarot.type";
import { useState } from "react";
import Button from "../components/Button";
import ButtonReturn from "../components/ButtonReturn";

export const Deck = () => {

// selected suit is a variable that will change based on the click of the buttons at the top of the page. Selected state is the "setter" that will update it.

  const [selectedSuit, setSelectedState] = useState("fart");

// filter by suit is the function that sorts the tarotCardData according to what selected suit from above is. It checks the data and filtesr out what card.suit matches selected suit.
  function filterBySuit(data: MyTarotProps[]) {
    return data.filter((card) => card.suit === selectedSuit);
     
  }
function grabSelectedSuit(button:any){
  setSelectedState(button.currentTarget.getAttribute("buttonName"))
}

// This removes the first card from the data structure as we don't need it for this page.
  const removeFirstCard = tarotCardData.tarotDeck.slice(1);

//THis is mapping through the cards and slotting in props.
  const tarotDeck = removeFirstCard.map((tarotCard, index) => {
    return <TarotCard imageSrc={tarotCard.imageFileName} onClick={() => {}} />;
  });


//This is doing the same as above but for just majors. we can refactor to make it less lines.
  const majors = filterBySuit(removeFirstCard).map((tarotCard, index) => {
    return <TarotCard imageSrc={tarotCard.imageFileName} onClick={() => {}} />;
  });

  return (
    <div>
      <button
        buttonName="Major"
        onClick={grabSelectedSuit}>Major Cards
      </button>
      <button
        buttonName="Cups"
        onClick={grabSelectedSuit}>Cups Cards
      </button>
      {/* <div>{tarotDeck}</div> */}
     <div className="grid grid-cols-7 gap-4"> {majors} </div>
    </div>
  );
};

// arthvadrr: Probably want to utilize state, then have buttons update state, and then render components conditionally based on that state
