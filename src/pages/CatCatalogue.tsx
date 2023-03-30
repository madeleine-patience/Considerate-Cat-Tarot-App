import React from "react";
import catData from "../data/cats";
import Purrlaroid from "../components/Purrlaroid";
import Menu from "../components/Menu";
import useDisplayCatInfo from "../components/displayCatInfo";
import SelectedCatInfo from "../components/SelectedCatinfo";
const CatCatalogue = () => {
  // return [showCatInfo, selectedCatId, handleShowCatInfo] as const;

  const [showCatInfo, selectedCatId, handleShowCatInfo] = useDisplayCatInfo();

  function displayDetailedCatInfo(cat: any) {
    console.log("Hi all, sorry my brain is so smooth right now.");
    handleShowCatInfo(cat);
  }

  const allPurrlaroids = catData.cats.map((cat, index) => {
    return (
      <Purrlaroid
        data={cat}
        key={cat.id}
        handleClick={displayDetailedCatInfo}
      />
    );
  });

  console.log(catData);

  return (
    <div className="">
      <Menu />
      <div className="grid grid-cols-4 gap-4">{allPurrlaroids}</div>
      {showCatInfo && (
        <div className="flex flex-col">
          {<SelectedCatInfo data={catData.cats[selectedCatId]} />}
          {/* 
          two_eight: by using the {handleMethod} syntax instead of {() => handleMethod()} it's expected that your handleMethod function accept a MouseEvents argument */}
        </div>
      )}
    </div>
  );
};

export default CatCatalogue;
