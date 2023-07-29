import catData from "../data/cats";
import ICatProps from "../types/CatProps";
import useDisplayCatInfo from "../hooks/displayCatInfo";
import { v4 as uuidv4 } from "uuid";
import { styled } from "@mui/system";

const ModalContainer = styled("div")(({ theme }) => ({
  backgroundColor:"#C1FFD5",
  width: "100%",
  height: "100%",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
  padding:"25px",
  borderRadius: "20px",
  gap: "15px"

}));
const MainContent = styled("div")(({ theme }) => ({
display:"flex",
gap: "15px",  

}));

const TextContainer = styled("div")(({ theme }) => ({
display:"flex",
alignItems:"center",
justifyContent:"center",
flexDirection:"column",

}));

const MainCat = styled("img")(({ theme }) => ({
borderRadius: "25px",

}));

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
          <MainCat src={props.data.image} />
        
        <TextContainer>
          <p> {props.data.name}</p>
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
