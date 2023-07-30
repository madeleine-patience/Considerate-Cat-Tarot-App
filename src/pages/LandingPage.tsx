import Button from "../components/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import homepageImage from "/Art/titlePage.jpg";
import Menu from "../components/Menu";
import { styled } from "@mui/system";
import { borderRadius, display } from "@mui/system";
import catData from "../data/cats";
import Purrlaroid from "../components/Purrlaroid";
import useDisplayCatInfo from "../hooks/displayCatInfo";
import SelectedCatInfo from "../components/SelectedCatinfo";

const PageContainer = styled("div")({
    width:"100%",
    height: "100%",
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
  })
  const RowOfOptions = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "auto auto auto auto ",
    gap: "10px",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "auto auto  ",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "auto   ",
    },
  }));
  

const Options = styled ('div')({
    width:"250px",
    height: "250px",
    backgroundColor: "pink",
    borderRadius: "10px",
    backgroundImage: 'url("/Cats/BenBen.jpg")'

})


const RightContainer = styled("div")({
 
})


export const LandingPage = () => {
  return (
    <>
    <Menu />
    <PageContainer>
      <RowOfOptions>
        <Options>
        </Options>
        <Options>
        </Options>
        <Options>
        </Options>
        <Options>
        </Options>
      </RowOfOptions>
    </PageContainer>
    </>
  );
};

