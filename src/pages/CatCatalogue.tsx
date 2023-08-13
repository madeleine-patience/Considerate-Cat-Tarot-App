import catData from "../data/cats";
import Purrlaroid from "../components/Purrlaroid";
import Menu from "../components/Menu";
import useDisplayCatInfo from "../hooks/displayCatInfo";
import SelectedCatInfo from "../components/SelectedCatinfo";
import { styled } from "@mui/system";
import { DialogContainer } from "../components/StyledElements/DialogContainer";
import { DialogContent } from "../components/StyledElements/DialogContent";
import Button from "../components/Button";
import CatCarousel from "../components/CatCarousel";
const StyledCatalogue = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "auto auto auto auto ",
  gap: "10px",
  margin: "auto",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "auto auto auto ",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "auto auto  ",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "auto   ",
  },
}));

const CatCatalogue = () => {
  const [showCatInfo, selectedCatId, handleShowCatInfo] = useDisplayCatInfo();

  const sortByAlphabetical = catData.cats
    .slice()
    .sort((cat1, cat2) =>
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
    <div>
      {showCatInfo && (
        <>
          <Button
            buttonName="X"
            onClick={() => handleShowCatInfo(false)}
            style={{
              borderRadius: "100px",
              width: "34px",
              height: "34px",
              position: "absolute",
              right: "-10px",
              top: "-10px",
            }}
          />
          {/* <SelectedCatInfo
            data={sortByAlphabetical.find((cat) => cat.id == selectedCatId)!}
          /> */}
        </>
      )}
      <Menu />
      <CatCarousel />

      {/* <StyledCatalogue>{allPurrlaroids}</StyledCatalogue> */}
    </div>
  );
};

export default CatCatalogue;
