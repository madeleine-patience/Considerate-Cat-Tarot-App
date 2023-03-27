import tarotCardData from "../data/tarotCardData";
import TarotCard from "../components/TarotCard";
import MyTarotProps from "../types/Tarot.type";
import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import useRandomNumber from "../components/displayTarotInfo";
import useDisplayTarotInfo from "../components/displayTarotInfo";
import TarotCardDetails from "../components/TarotCardDetails"
import data from "../data/tarotCardData";
export const Deck = () => {


// Bringing in the hook of useDisplayTarotInfo here, show number is 0, showHIde is false and getTarotInfo is a function that allows us to show and hide the information about the selected card.
const [showNumber, showHide, setTarotInfo]= useDisplayTarotInfo(0)
const [showNumber2, setShowNumber2]= useState(0)

  // selected suit is a variable that will change based on the click of the buttons at the top of the page. Selected state is the "setter" that will update it.

  // VerifiedCodingGarden: Oh okay you need to set your useState type useState<string | null>(null)
  const [selectedSuit, setSelectedState] = useState<string | null>(null);

  // filter by suit is the function that sorts the tarotCardData according to what selected suit from above is. It checks the data and filtesr out what card.suit matches selected suit.
  function filterBySuit(data: MyTarotProps[]) {
    return data.filter((card) => card.suit === selectedSuit);
  }
  function grabSelectedSuit(e: React.MouseEvent<HTMLButtonElement>) {
    setSelectedState(e.currentTarget.value);
    console.log(selectedSuit);
  }

function revealTarotInformation(cardNumber: number) {
  setTarotInfo();
  setShowNumber2(cardNumber);
}
  const removeFirstCard = tarotCardData.tarotDeck.slice(1);

  const navigate = useNavigate();

  //This is doing the same as above but for just majors. we can refactor to make it less lines.

// Below function is not currently working, something for another day. 
  const selectedCards = filterBySuit(removeFirstCard).map((tarotCard, index) => {
    return <TarotCard imageSrc={tarotCard.imageFileName}  onClick={() => revealTarotInformation(data.tarotDeck[tarotCard].id)} />;
  });


// const pullThreeCards = randomTarotNumbers.map((tarotFront, index) => {
//   return (
//     <TarotFront
//       onClick={() => revealTarotInformation(data.tarotDeck[tarotFront].id)}
//       imageSrc={data.tarotDeck[tarotFront].imageFileName}
//     />
//   );
// });




  console.log(showHide)
  return (
<div>
    <div>
      <Button buttonName="Home" onClick={() => navigate("/")}></Button>
      <Button value="Major" buttonName="Major" onClick={grabSelectedSuit}>
        Major Cards
      </Button>
      <Button value="Cups" buttonName="Cups" onClick={grabSelectedSuit}>
        Cups Cards
      </Button>
      <Button
        value="Pentacles"
        buttonName="Pentacles"
        onClick={grabSelectedSuit}
      >
        Cups Cards
      </Button>
      <Button value="Swords" buttonName="Swords" onClick={grabSelectedSuit}>
        Cups Cards
      </Button>
      <Button value="Wands" buttonName="Wands" onClick={grabSelectedSuit}>
        Cups Cards
      </Button>
      <div className="grid grid-cols-7 gap-4"> {selectedCards} </div>

    </div>
      {showHide &&           <div>
            <div className="# ">
              <TarotCard data={data.tarotDeck[showNumber2]} />

            </div>
            <div className="">
              {" "}
              <Button
                buttonName="Close"
                onClick={ setTarotInfo}
              ></Button>
            </div>
          </div>}
</div>


  );
};
// arthvadrr: Probably want to utilize state, then have buttons update state, and then render components conditionally based on that state


