import React from "react";
import catData from "../data/cats";
import Purrlaroid from "../components/Purrlaroid";
import Menu from "../components/Menu";

const CatCatalogue = () => {
  console.log(catData);
  const allPurrlaroids = catData.cats.map((cat, index) => {
    return <Purrlaroid data={cat} />;
  });

  console.log(catData);

  return (
    <div className="">
      <Menu />
      <div className="grid grid-cols-4 gap-4">{allPurrlaroids}</div>
    </div>
  );
};

export default CatCatalogue;
