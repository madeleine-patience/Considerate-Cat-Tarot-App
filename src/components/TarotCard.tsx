import { useState } from "react";
import SelectedCatInfo from "./SelectedCatinfo";
import catData from "../data/cats";
import tarotData from "../data/tarotCardData";

interface MyTarotProps {
  data: {
    id: number;
    cardName: string;
    keyWords: string[];
    imageFileName: string;
    description: string;
    catImage?: string[] | undefined;
    suit?: string;
  };
}
// console.log(catData.cats[0]);
// function FindProperCat(catInfo: any, tarotInfo: any) {
//   const indexOfCard = tarotInfo.tarotDeck[0].id;
//   const findTheCat = catInfo.cats.find((cat) => cat.id === indexOfCard);
//   return findTheCat;
// }

// console.log(FindProperCat(catData, tarotData));

function TarotCard(props: MyTarotProps) {
  const [showCatInfo, setShowCatInfo] = useState(false);
  function handleShowCatInfo() {
    setShowCatInfo(!showCatInfo);
  }
  // console.log(props.data.id);
  // if (catData.cats[props.data.id].relevantCards.includes(props.data.id)) {
  //   console.log("hi");
  // }

  // console.log(catData.cats[1].relevantCards?.includes(9));
  const idOfCard = props.data.id;
  const findTheCat = catData.cats.find((cat) =>
    cat.relevantCards?.includes(idOfCard)
  );
  const theIdOfTheCat = findTheCat.id;
  console.log(theIdOfTheCat);
  // console.log(findTheCat);

  return (
    <div>
      {!showCatInfo && (
        <div className=" bg-orange-200 max-w-[500px] p-4 m-2 rounded-md ">
          <h1 className=" text-4xl">{props.data.cardName}</h1>
          <h2 className="  pt-2">Suit: {props.data.suit} </h2>
          <p className="italic mt-2">
            Keywords: {props.data.keyWords.join(", ")}
          </p>
          <div className="flex pt-2 items-center justify-center ">
            <img
              className="w-[45%] rounded-md shadow-md"
              src={props.data.imageFileName}
            />
            <div className="flex-row m-4">
              <p className="#">{props.data.description}</p>
              {props.data.catImage && (
                <p className="mt-4 text-sm">Cats Present: </p>
              )}

              <div className="flex">
                {props.data.catImage &&
                  props.data.catImage.map((image) => (
                    <img
                      onClick={handleShowCatInfo}
                      className=" w-16 mr-2 rounded-lg"
                      src={image}
                    ></img>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {showCatInfo && (
        <div>
          <button onClick={handleShowCatInfo}> Back </button>

          {<SelectedCatInfo data={catData.cats[theIdOfTheCat]} />}
        </div>
      )}
    </div>
  );
}

export default TarotCard;
