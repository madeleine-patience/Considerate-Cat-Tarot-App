import catData from "../data/cats";
import ICatProps from "../types/CatProps";
import { styled } from "@mui/system";
import { H2Title } from "./TarotCardDetails";

const ModalContainer = styled("div")({
  backgroundColor: "#C1FFD5",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "25px",
  borderRadius: "20px",
  gap: "15px",
});

const MainContent = styled("div")({
  display: "flex",
  gap: "20px",
  alignItems: "center",
});
// First section of Container
const MainCatContainer = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  width: "50%",
});

const MainCat = styled("img")({
  borderRadius: "25px",
  width: "100%",
  backgroundSize: "cover",
});

const TextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  overflow: "hidden",
  width: "50%",
});

const DescriptionParagraph = styled("p")({
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
  display: "-webkit-box",
  webkitLineClamp: "12",
  webkitBoxOrient: "vertical",
});
// Second section of Container

const BuddyContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  fontSize: "20px",
  gap: "10px",
});

const BuddyImage = styled("img")({
  width: "100px",
  borderRadius: "10px",
});

function SelectedCat({ data }: ICatProps) {
  const buddyLinks = data.buddyIds;
  return (
    <ModalContainer>
      <H2Title> {data.name}</H2Title>
      <MainContent>
        <MainCatContainer>
          <MainCat src={data.image} />
        </MainCatContainer>

        <TextContainer>
          <DescriptionParagraph> {data.description}</DescriptionParagraph>
        </TextContainer>
      </MainContent>
      <BuddyContainer>
        {data.buddyIds && <h3> {data.name}'s Buddies</h3>}
        {data.buddyIds &&
          data.buddyIds.map((buddyNumber) => (
            <>
              <BuddyImage
                key={"hi"}
                src={catData.cats[buddyNumber].image}
              ></BuddyImage>
            </>
          ))}
      </BuddyContainer>
    </ModalContainer>
  );
}

export default SelectedCat;
