import { useState } from "react";
import data from "../data/tarotCardData";
import "@fontsource/merriweather";
import TarotFront from "../components/TarotCard";

//Ok so we have created this new component so that we can pull out tarot front and back and have everything render everything individualy. WIP. (Each card will have its own state : and to track state

// DESTRUCTURE IT - love cheddev
interface PROPS {
  message: string;
  pets: Array<{ id: number; name: string }>;
}
const FlippableCard = ({ message, pets }: PROPS) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      {pets.map((pet: { id: number; name: string }) => (
        <TarotFront
          key={pet.id}
          onClick={() => console.log("message", pet.name, pets)}
          imageSrc={data.tarotDeck[0].imageFileName}
        />
      ))}
    </>
  );
};

export default FlippableCard;

// const FlippableCard = (props:any) => {
//     const [isFlipped, setIsFlipped] = useState(false);

//     return (isFlipped ? (
//       <TarotFront
//         key={}
//         onClick={() => revealTarotInformation(data.tarotDeck[tarotFront].id)}
//         imageSrc={data.tarotDeck[0].imageFileName}
//       />
//     ) : (
//       <TarotBack
//         key={uuidv4()}
//         onClick={() => revealTarotInformation(data.tarotDeck[tarotFront].id)}
//       />
//     ));
//   };
