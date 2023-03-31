import catData from "../data/cats";
import Purrlaroid from "../components/Purrlaroid";
import Menu from "../components/Menu";
import useDisplayCatInfo from "../hooks/displayCatInfo";
import SelectedCatInfo from "../components/SelectedCatinfo";
const CatCatalogue = () => {
  const [showCatInfo, selectedCatId, handleShowCatInfo] = useDisplayCatInfo();

  const allPurrlaroids = catData.cats.map((cat, index) => {
    return (
      <Purrlaroid
        data={cat}
        key={cat.id}
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
          {
            <SelectedCatInfo
              handleClick={() => {}}
              data={catData.cats[selectedCatId]}
            />
          }
          {/* 
          two_eight: by using the {handleMethod} syntax instead of {() => handleMethod()} it's expected that your handleMethod function accept a MouseEvents argument */}
        </div>
      )}
    </div>
  );
};

export default CatCatalogue;
