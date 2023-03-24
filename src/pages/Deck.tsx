import tarotCardData from "../data/tarotCardData";
import TarotCard from "../components/TarotCard";
import MyTarotProps from "../types/Tarot.type";
import { useState } from "react";
import Button from "../components/Button";

export const Deck = () => {

// selected suit is a variable that will change based on the click of the buttons at the top of the page. Selected state is the "setter" that will update it.

  const [selectedSuit, setSelectedState] = useState(null);

// filter by suit is the function that sorts the tarotCardData according to what selected suit from above is. It checks the data and filtesr out what card.suit matches selected suit.
  function filterBySuit(data: MyTarotProps[]) {
    return data.filter((card) => card.suit === selectedSuit);
     
  }

function grabSelectedSuit(button:any){
  setSelectedState(button.target.dataset.buttonName);
  console.log(selectedSuit)
}

// This removes the first card from the data structure as we don't need it for this page.
  const removeFirstCard = tarotCardData.tarotDeck.slice(1);

//This is doing the same as above but for just majors. we can refactor to make it less lines.
  const majors = filterBySuit(removeFirstCard).map((tarotCard, index) => {
    return <TarotCard imageSrc={tarotCard.imageFileName} onClick={() => {}} />;
  });

  return (
    <div>
      <Button
        buttonName="Major"
        onClick={grabSelectedSuit}>Major Cards
      </Button>
      <Button
        buttonName="Cups"
        onClick={grabSelectedSuit}>Cups Cards
      </Button>
      <Button
        buttonName="Pentacles"
        onClick={grabSelectedSuit}>Cups Cards
      </Button>
   <Button
        buttonName="Swords"
        onClick={grabSelectedSuit}>Cups Cards
      </Button>
      <Button
        buttonName="Wands"
        onClick={grabSelectedSuit}>Cups Cards
      </Button>
      {/* <div>{tarotDeck}</div> */}
     <div className="grid grid-cols-7 gap-4"> {majors} </div>
    </div>
  );
};
// arthvadrr: Probably want to utilize state, then have buttons update state, and then render components conditionally based on that state
