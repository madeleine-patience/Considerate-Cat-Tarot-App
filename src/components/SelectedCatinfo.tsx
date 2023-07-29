import catData from "../data/cats";
import ICatProps from "../types/CatProps";
import useDisplayCatInfo from "../hooks/displayCatInfo";
import { v4 as uuidv4 } from "uuid";
import { styled } from "@mui/system";

const ModalContainer = styled("div")(({ theme }) => ({
  backgroundColor:"#C1FFD5",
  width: "100%",
  height: "100%",
  display:"grid",
  gridTemplateColumns:"1fr 1fr",
  padding:"25px",
  borderRadius: "20px",
  gap: "15px"

}));

const MainContent = styled("div")(({ theme }) => ({
display:"flex",
gap: "15px",  

}));

// First section of Container
const MainCatContainer = styled("div")(({ theme }) => ({
  width: "50%"
}));

const MainCat = styled("img")(({ theme }) => ({
  borderRadius: "25px",
  
  }));

const TextContainer = styled("div")(({ theme }) => ({
display:"flex",
flexGrow: "1",
alignItems:"flexStart",
justifyContent:"center",
flexDirection:"column",
gap:"15px",
width: "50%"
}));

const TitleText=  styled("h1")(({ theme }) => ({
  fontSize: "32px"

}));

// Second section of Container

const BuddyContainer=  styled("div")({
width: "100%",
display:"flex",
flexDirection:"column",
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
          <TitleText> {props.data.name}</TitleText>
          <p> {props.data.description}</p>
        </TextContainer>
      </MainContent>
        <BuddyContainer>
          {props.data.buddyIds && <h3>Buddies</h3>}
          {buddyLinks &&
            buddyLinks.map((buddyNumber) => (
              <BuddyImage key={uuidv4()} src={catData.cats[buddyNumber].image}></BuddyImage>
            ))}
        </BuddyContainer>
      </ModalContainer>
  );
}

export default SelectedCat;
