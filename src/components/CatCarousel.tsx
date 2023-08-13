import { styled } from "@mui/system";
import catData from "../data/cats";
import { useState } from "react";
const TempContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
});
const LeftContainer = styled("div")({
  width: "600px",
  height: "600px",
});
const MainCatImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const SecondaryImageContainer = styled("div")({
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "auto",
});

const CatCarousel = () => {
  const secondaryCatImages = catData.cats[2].secondaryImages;
  const [mainImage, setMainImage] = useState(catData.cats[2].image);

  const scrollThroughCats = (
    currentImage: string,
    direction: "left" | "right"
  ) => {
    const lastImage = (secondaryCatImages?.length ?? 0) - 1;
    const indexOfCurrentImage = secondaryCatImages?.indexOf(currentImage);

    if (direction === "right") {
      if (indexOfCurrentImage === lastImage) {
        return null;
      }
      const newIndex = (indexOfCurrentImage ?? 0) + 1;
      setMainImage((secondaryCatImages as string[])[newIndex]);
    }

    if (direction === "left") {
      if (indexOfCurrentImage === 0) {
        return null;
      }
      const newIndex = (indexOfCurrentImage ?? 0) - 1;
      setMainImage((secondaryCatImages as string[])[newIndex]);
    }
  };

  const secondaryImages = catData.cats[2].secondaryImages?.map((catImages) => {
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
    <TempContainer>
      <button onClick={() => scrollThroughCats(mainImage, "left")}>Left</button>
      <LeftContainer>
        <MainCatImage src={mainImage} />
        <SecondaryImageContainer>{secondaryImages}</SecondaryImageContainer>
      </LeftContainer>
      <button onClick={() => scrollThroughCats(mainImage, "right")}>
        Right
      </button>{" "}
    </TempContainer>
  );
};

export default CatCarousel;
