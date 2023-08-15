import { styled } from "@mui/system";
import catData from "../data/cats";
import { useState } from "react";
import ICatProps from "../types/CatProps";
import { Fab } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const PageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  width: 1000,
  background: theme.palette.primary.main,
  height: "800px",
  margin: "auto",

  // [theme.breakpoints.up("md")]: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  // },
}));

const LeftContainer = styled("div")({
  width: "50%",
  display: "flex",
  alignItems: "Center",
});
const CatImageContainer = styled("div")({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  width: "100%",
  height: "100%,",
  padding: 25,
});

const ButtonSpacing = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "450px",
});

const ButtonNavigationContainer = styled("div")({
  position: "absolute",
  top: "225px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  margin: "auto",
});

const MainCatImage = styled("img")({
  width: "500px",
  height: "500px",
  objectFit: "cover",
});

const SecondaryImageContainer = styled("div")({
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "auto",
});

// Right content
const RightContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 20,
});

const H1 = styled("h1")({
  fontFamily: theme.typography.h1.fontFamily,
  fontSize: 80,
});
const BuddyImage = styled("img")({
  width: "100px",
  borderRadius: "10px",
});

const Parargraph = styled("p")({
  fontFamily: theme.typography.h2.fontFamily,
});

const CatCarousel = ({
  data,
  stateFromParent,
  setterFromParent,
}: ICatProps) => {
  const secondaryCatImages = catData.cats[data.id].secondaryImages ?? [];
  const [mainImage, setMainImage] = useState(data.image);

  const navigate = useNavigate();

  const scrollThroughCats = (
    currentImage: string,
    direction: "left" | "right"
  ) => {
    if (secondaryCatImages.length < 1) {
      return;
    }
    let indexOfCurrentImage = secondaryCatImages.indexOf(currentImage);
    direction === "right" ? ++indexOfCurrentImage : --indexOfCurrentImage;

    if (
      indexOfCurrentImage < 0 ||
      indexOfCurrentImage > secondaryCatImages.length - 1
    )
      return;

    setMainImage((secondaryCatImages as string[])[indexOfCurrentImage]);
  };

  const secondaryImages = secondaryCatImages.map((catImages) => {
    return (
      <button
        style={{
          backgroundImage: `url(${catImages})`,
          backgroundSize: "cover",
          flex: "0 0 auto",
          width: "200px",
          height: "200px",
        }}
        key={catImages}
        onClick={() => setMainImage(catImages)}
      />
    );
  });
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          position: "relative",
          width: 1000,
          margin: "auto",
        }}
      >
        <Button
          buttonName="Back"
          style={{ margin: "20px 0" }}
          onClick={() => {
            setterFromParent?.(true);
          }}
        />
        <PageContainer>
          {/* Cat Content */}
          <LeftContainer>
            <CatImageContainer>
              <ButtonSpacing>
                <ButtonNavigationContainer>
                  <Fab
                    aria-label="add"
                    style={{
                      background: theme.palette.secondary.main,
                    }}
                    onClick={() => scrollThroughCats(mainImage, "left")}
                  >
                    <ArrowBackIcon />
                  </Fab>
                  <Fab
                    aria-label="add"
                    style={{
                      background: theme.palette.secondary.main,
                    }}
                    onClick={() => scrollThroughCats(mainImage, "right")}
                  >
                    <ArrowForwardIcon />
                  </Fab>
                </ButtonNavigationContainer>
              </ButtonSpacing>
              <MainCatImage src={mainImage} />
              <SecondaryImageContainer>
                {secondaryImages}
              </SecondaryImageContainer>
            </CatImageContainer>
          </LeftContainer>

          {/* Text Content */}

          <RightContainer>
            <H1>{data.name}</H1>
            <Parargraph>{data.description}</Parargraph>
            {/* {data.buddyIds && <h3> {data.name}'s Buddies</h3>}
        {data.buddyIds &&
          data.buddyIds.map((buddyNumber) => (
            <>
              <BuddyImage
                key={"hi"}
                src={catData.cats[buddyNumber].image}
              ></BuddyImage>
            </>
          ))} */}
          </RightContainer>
        </PageContainer>
      </div>
    </ThemeProvider>
  );
};

export default CatCarousel;
