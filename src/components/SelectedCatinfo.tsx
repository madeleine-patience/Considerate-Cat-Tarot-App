import catData from "../data/cats";
import ICatProps from "../types/CatProps";
import useDisplayCatInfo from "../hooks/displayCatInfo";
import { v4 as uuidv4 } from "uuid";
import { styled } from "@mui/system";
import { H2Title } from "./TarotCardDetails";

const ModalContainer = styled("div")({
  backgroundColor: "#C1FFD5",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "Center",
  height: "100%",
  padding: "25px",
  borderRadius: "20px",
  gap: "15px",
});

const MainContent = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gap: "20px",
  height: "350px",
});
// First section of Container
const MainCatContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const MainCat = styled("img")({
  borderRadius: "25px",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
});

const TextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  overflow: "hidden",
});

const DescriptionParagraph = styled("p")({
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
  display: "-webkit-box",
  "-webkit-line-clamp": "12",
  "-webkit-box-orient": "vertical",
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

function SelectedCat(props: ICatProps) {
  const [showCatInfo, selectedCatId, handleShowCatInfo] = useDisplayCatInfo();
  const buddyLinks = props.data.buddyIds;
  return (
    <ModalContainer>
      <MainContent>
        <MainCatContainer>
          <MainCat src={props.data.image} />
        </MainCatContainer>
        <TextContainer>
          <H2Title> {props.data.name}</H2Title>
          <DescriptionParagraph> {props.data.description}</DescriptionParagraph>
        </TextContainer>
      </MainContent>
      <BuddyContainer>
        {props.data.buddyIds && <h3> {props.data.name}'s Buddies</h3>}
        {buddyLinks &&
          buddyLinks.map((buddyNumber) => (
            <BuddyImage
              key={uuidv4()}
              src={catData.cats[buddyNumber].image}
            ></BuddyImage>
          ))}
      </BuddyContainer>
    </ModalContainer>
  );
}

export default SelectedCat;
