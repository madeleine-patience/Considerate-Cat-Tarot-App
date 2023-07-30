import Button from "../components/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import homepageImage from "/Art/titlePage.jpg";
import Menu from "../components/Menu";
import { styled } from "@mui/system";

const HomeContainer = styled("div")(({ theme }) => ({
  margin: "25px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));
const HomeButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "15px",
  margin: "auto",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));
const Home = () => {
  const navigate = useNavigate();
  const navigateToTarotRead = () => {
    navigate("/tarotRead");
  };

  return (
    <>
      {" "}
      <Menu />
      <HomeContainer>
        <img className="#" src={homepageImage} />
        <HomeButtonContainer>
          <Button buttonName="Enter" onClick={() => navigateToTarotRead()} />
          <Button
            buttonName="View All Cards"
            onClick={() => navigate("/Deck")}
          />
        </HomeButtonContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
