import { styled } from "@mui/system";
import catData from "../data/cats";
import { useState } from "react";
import ICatProps from "../types/CatProps";
import { Fab } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  width: 1000,
  height: "800px",
  background: "pink",
  margin: "auto",
  padding: 20,
  gap: 20,

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
  padding: 20,
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
  width: "450px",
  height: "450px",
  objectFit: "cover",
});

const SecondaryImageContainer = styled("div")({
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "auto",
});

// Right content
const RightContainer = styled("div")({
  padding: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const H1 = styled("h1")({
  fontSize: 60,
});
const BuddyImage = styled("img")({
  width: "100px",
  borderRadius: "10px",
});
interface CatCarouselProps {
  id: number;
}

const CatCarousel = ({ data }: ICatProps) => {
  const secondaryCatImages = catData.cats[data.id].secondaryImages ?? [];
  const [mainImage, setMainImage] = useState(data.image);

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
    <PageContainer>
      {/* Cat Content */}
      <LeftContainer>
        <CatImageContainer>
          <ButtonSpacing>
            <ButtonNavigationContainer>
              <Fab
                aria-label="add"
                style={{
                  background: "lightBlue",
                }}
                onClick={() => scrollThroughCats(mainImage, "left")}
              >
                <ArrowBackIcon />
              </Fab>
              <Fab
                aria-label="add"
                style={{
                  background: "lightBlue",
                }}
                onClick={() => scrollThroughCats(mainImage, "right")}
              >
                <ArrowForwardIcon />
              </Fab>
            </ButtonNavigationContainer>
          </ButtonSpacing>
          <MainCatImage src={mainImage} />
          <SecondaryImageContainer>{secondaryImages}</SecondaryImageContainer>
        </CatImageContainer>
      </LeftContainer>

      {/* Text Content */}

      <RightContainer>
        <H1>{data.name}</H1>
        <p>{data.description}</p>
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
  );
};

export default CatCarousel;
