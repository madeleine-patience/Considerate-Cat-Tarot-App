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
  borderRadius: "12px",
  gap: "15px",
  animation: "SelectedCatInfoFadeIn 210ms",
  "@keyframes SelectedCatInfoFadeIn": {
    "from": {
      opacity: 0,
    },
    "to": {
      opacity: 1
    }
  }
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
  borderRadius: "8px",
  width: "100%",
  backgroundSize: "cover",
});

const TextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
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
  borderRadius: "50%",
  cursor: "pointer",
  transition: "all 120ms",
  transformStyle: "preserve-3d",
  border: "3px double #346544",
  filter: "saturate(40%)",
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  "&:hover": {
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    transform: "scale(1.1)",
    filter: "saturate(100%)",
  },
  "&:active": {
    transform: "rotateY(-200deg) scale(1.1)",
    filter: "saturate(100%)",
  }
});

function SelectedCat({ data }: ICatProps) {
  const buddyLinks = data.buddyIds;
  return (
    <ModalContainer>
      <MainContent>
        <MainCatContainer>
          <MainCat src={data.image} />
        </MainCatContainer>

        <TextContainer>
          <H2Title> {data.name}</H2Title>
          <DescriptionParagraph>{data.description}</DescriptionParagraph>
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
              <div>{buddyNumber}</div>
            </>
          ))}
      </BuddyContainer>
    </ModalContainer>
  );
}

export default SelectedCat;
