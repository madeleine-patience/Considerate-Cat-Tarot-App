import catData from "../data/cats";
import Purrlaroid from "../components/Purrlaroid";
import Menu from "../components/Menu";
import useDisplayCatInfo from "../hooks/displayCatInfo";
import SelectedCatInfo from "../components/SelectedCatinfo";
import { styled } from '@mui/system';


const StyledCatalogue = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto',
  gap: '10px',
});


const CatCatalogue = () => {
  const [showCatInfo, selectedCatId, handleShowCatInfo] = useDisplayCatInfo();

  const sortByAlphabetical = catData.cats.sort((cat1, cat2) =>
    cat1.name < cat2.name ? -1 : cat1.name > cat2.name ? 1 : 0
  );

  const allPurrlaroids = sortByAlphabetical.map((cat, index) => {
    return (
      <Purrlaroid
        data={cat}
        key={index}
        handleClick={() => handleShowCatInfo(cat)}
      />
    );
  });

  return (
    <div className="">
      <Menu />
      <StyledCatalogue>{allPurrlaroids}</StyledCatalogue>
      {showCatInfo && (
        <div className="flex flex-col">
          <SelectedCatInfo
            data={sortByAlphabetical.find((cat) => cat.id == selectedCatId)!}
          />
        </div>
      )}
    </div>
  );
};

export default CatCatalogue;
