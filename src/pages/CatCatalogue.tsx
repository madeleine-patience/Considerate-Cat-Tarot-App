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
import AppearsOnTheseCards from "../components/AppearsOnTheseCards";
import DisplayBuddies from "../components/DisplayBuddies";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const StyledCatalogue = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "auto auto auto auto ",
  gap: "30px",
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
  padding: 25,
}));
const CatInfoContainer = styled("div")(({ theme }) => ({
  width: 1000,
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  gap: 20,
}));

const SecondaryTitles = styled("h2")({
  fontFamily: theme.typography.h1.fontFamily,
  fontSize: 32,
});

const BuddyContainer = styled("div")({
  background: "lightBlue",
  padding: 25,
});

const CatCatalogue = () => {
  const [showCatInfo, selectedCatId, handleShowCatInfo] = useDisplayCatInfo();
  console.log(selectedCatId);
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

  const SelectedCatBuddies = catData.cats.map((cat, index) => {
    if (catData.cats[selectedCatId]?.buddyIds?.includes(cat.id)) {
      return <Purrlaroid data={cat}></Purrlaroid>;
    }
  });

  return (
    <ThemeProvider theme={theme}>
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
          </>
        )}
        <Menu />
        {showCatInfo && (
          <CatInfoContainer>
            <CatCarousel
              data={sortByAlphabetical.find((cat) => cat.id == selectedCatId)!}
              stateFromParent={showCatInfo}
              setterFromParent={handleShowCatInfo}
            />
            <SecondaryTitles> Appears On Cards: </SecondaryTitles>
            <AppearsOnTheseCards
              data={sortByAlphabetical.find((cat) => cat.id == selectedCatId)!}
            />
            {catData.cats[selectedCatId].buddyIds && (
              <SecondaryTitles> Buddies: </SecondaryTitles>
            )}
            <BuddyContainer> {SelectedCatBuddies}</BuddyContainer>
          </CatInfoContainer>
        )}

        {!showCatInfo && <StyledCatalogue>{allPurrlaroids}</StyledCatalogue>}
      </div>
    </ThemeProvider>
  );
};

export default CatCatalogue;
