import Button from "../components/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import homepageImage from "/Art/titlePage.jpg";
import Menu from "../components/Menu";
import { styled } from "@mui/system";

const HomeHero = styled("div")(({ theme }) => ({
  height: "calc(100vh - 230px)",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${homepageImage})`
}));

const HomeContainer = styled("div")(({ theme }) => ({
  padding: "25px",
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
      <Menu />
      <HomeContainer>
        <HomeHero />
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
