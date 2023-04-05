import catData from "../data/cats";
import Purrlaroid from "../components/Purrlaroid";
import Menu from "../components/Menu";
import useDisplayCatInfo from "../hooks/displayCatInfo";
import SelectedCatInfo from "../components/SelectedCatinfo";
import { v4 as uuidv4 } from "uuid";

const CatCatalogue = () => {
  // Bring in hook from useDisplayCatInfo
  const [showCatInfo, selectedCatId, handleShowCatInfo] = useDisplayCatInfo();

  // Modifies the array and sorts the cats into alphabetical order.
  const sortByAlphabetical = catData.cats.sort((cat1, cat2) =>
    cat1.name < cat2.name ? -1 : cat1.name > cat2.name ? 1 : 0
  );
  //Map data throughout purrlaroid component

  const allPurrlaroids = sortByAlphabetical.map((cat, index) => {
    return (
      <Purrlaroid
        // Data is entire catData object, component is set up to take in all data as props.
        data={cat}
        key={uuidv4()}
        //Handle click is the function we use from our handleShowCatInfo. It takes in the catdata that we are mapping through and runs it through the handleShowCatInfo function. It updates selected cat ID in the hook and allows us to get the proper cat.
        handleClick={() => handleShowCatInfo(cat)}
      />
    );
  });

  return (
    <div className="">
      <Menu />
      <div className="grid grid-cols-4 gap-4">{allPurrlaroids}</div>
      {showCatInfo && (
        <div className="flex flex-col">
          <SelectedCatInfo data={sortByAlphabetical[selectedCatId]} />
          {/* 
          two_eight: by using the {handleMethod} syntax instead of {() => handleMethod()} it's expected that your handleMethod function accept a MouseEvents argument */}
        </div>
      )}
    </div>
  );
};

export default CatCatalogue;
