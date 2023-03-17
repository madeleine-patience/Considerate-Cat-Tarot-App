import { useState } from "react";
import SelectedCatInfo from "./SelectedCatinfo";
import catData from "../data/cats";

interface MyTarotProps {
  data: {
    id: number;
    cardName: string;
    keyWords: string[];
    imageFileName: string;
    description: string;
    catImage?: string[];
    suit?: string;
  };
}

function TarotCard(props: MyTarotProps) {
  const [showCatInfo, setShowCatInfo] = useState(false);
  const [selectedCatId, setSelectedCatId] = useState(0);

  function handleShowCatInfo(image: any) {
    console.log(image);
    setShowCatInfo(!showCatInfo);
    const findTheCat = catData.cats.find((cat) => image === cat.image);
    if (findTheCat) {
      setSelectedCatId(findTheCat.id);
    }
  }
  console.log(selectedCatId);
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
                      key={image}
                      onClick={(event) => {
                        handleShowCatInfo(image);
                      }}
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
          <button onClick={() => handleShowCatInfo(props.data.catImage)}>
            Back
          </button>
          {<SelectedCatInfo data={catData.cats[selectedCatId]} />}
          {/* 
          two_eight: by using the {handleMethod} syntax instead of {() => handleMethod()} it's expected that your handleMethod function accept a MouseEvents argument */}
        </div>
      )}
    </div>
  );
}

export default TarotCard;
