import { useState } from "react";
import SelectedCatInfo from "./SelectedCatinfo";
import catData from "../data/cats";
import Button from "./Button";
import { TarotCardProps } from "../types/Tarot.type";
import useDisplayCatInfo from "../hooks/displayCatInfo";

function TarotCard(props: TarotCardProps) {
  const [showCatInfo, selectedCatId, handleShowCatInfo] = useDisplayCatInfo();

  function catLookup(image: any) {
    console.log(catData.cats);
    console.log(image);

    const findTheCat = catData.cats.find((cat) => cat.image === image);
    console.log(["This one hi madie"], { findTheCat });
    handleShowCatInfo(findTheCat);
  }

  return (
    <div className=" flex">
      {!showCatInfo && (
        <div className=" bg-orange-200 max-w-[500px] p-4 m-2 rounded-md ">
          <h1 className=" text-4xl">{props.data.cardName}</h1>
          <h2 className="  pt-2">Suit: {props.data.suit} </h2>
          <p className="italic mt-2">
            Keywords: {props.data.keyWords.join(", ")}
          </p>
          <div className="flex pt-2 items-center justify-center ">
            <img
              className="w-[45%] rounded-md shadow-lg"
              src={props.data.imageFileName}
            />
            <div className="flex-row m-4">
              <p className="#">{props.data.description}</p>
              {props.data.catImage && (
                <p className="mt-4 text-sm">Cats Present: </p>
              )}
              <div className="flex">
                {props.data.catImage &&
                  props.data.catImage.map((image: string) => (
                    <img
                      key={image}
                      onClick={(event) => {
                        catLookup(image);
                        console.log(image);
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
      {console.log("[component]: ", { selectedCatId })}
      {showCatInfo && (
        <div className="flex flex-col">
          {<SelectedCatInfo data={catData.cats[selectedCatId]} />}
          {/* 
          two_eight: by using the {handleMethod} syntax instead of {() => handleMethod()} it's expected that your handleMethod function accept a MouseEvents argument */}
        </div>
      )}
    </div>
  );
}

export default TarotCard;
