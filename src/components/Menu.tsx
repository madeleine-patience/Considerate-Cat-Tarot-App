import React, { useEffect, useRef } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import theme from "../theme";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import ElmerIcon from "./ElmerIcon";
const MenuContainer = styled("div")(({ theme }) => ({
  position: "relative",
}));

const MenuDropDown = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  background: "#d1b6e0",
  display: "flex",
  flexDirection: "column",
}));

const H1Title = styled("h1")(() => ({
  fontSize: "75px",
  fontStyle: "italic",
  fontFamily: theme.typography.h1.fontFamily,
  color: "white",
  textShadow: " 5px 5px #de71a1",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MainHeaderContent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 15,
}));
const LeftHeaderContent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "100%",
  gap: 20,
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  background: "pink",
  border: "2px solid #d47daf",
  [theme.breakpoints.down("lg")]: {
    position: "absolute",
    flexDirection: "column",
    right: 0,
    width: "100%",
    alignItems: "center",
    zIndex: 5,
  },
}));

const ButtonContainer2 = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  background: "pink",

  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const StyledMenuIcon = styled(MenuIcon)(({ theme }) => ({
  color: "white",

  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));
const Menu = () => {
  const navigate = useNavigate();
  const buttonInfo = [
    { buttonName: "Home", urlRedirect: "/LandingPage" },
    { buttonName: "Get a Tarot Read", urlRedirect: "/tarotRead" },
    { buttonName: "View All Cards", urlRedirect: "/Deck" },
    { buttonName: "View All Cats", urlRedirect: "/CatCatalogue" },
    { buttonName: "Horoscope Read", urlRedirect: "/Horoscope" },
    { buttonName: "Shop", urlRedirect: "" },
    { buttonName: "Learn About Tarot", urlRedirect: "/LearnTarot" },
    { buttonName: "About", urlRedirect: "" },
  ];

  const [showHide, setShowHide] = React.useState(false);
  const showHideMenuButton = () => {
    setShowHide(!showHide);
  };

  const menuButtons = buttonInfo.map((button, index) => {
    return (
      <div key={button.buttonName}>
        <Button
          buttonName={button.buttonName}
          onClick={() => {
            navigate(button.urlRedirect);
          }}
          style={{ borderRadius: "0", boxShadow: "0px", border: "0px" }}
        />
      </div>
    );
  });

  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const myEvent = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowHide(false);
      }
    };
    document.addEventListener("mousedown", myEvent);
    return () => {
      document.removeEventListener("mousedown", myEvent);
    };
  }, []);

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <MenuContainer ref={ref}>
        {
          <MenuDropDown>
            <MainHeaderContent>
              <LeftHeaderContent>
                <ElmerIcon />
                <H1Title> Considerate Cat </H1Title>
              </LeftHeaderContent>
              <StyledMenuIcon onMouseEnter={showHideMenuButton} />
            </MainHeaderContent>
          </MenuDropDown>
        }
        {showHide && !isLargeScreen && (
          <ButtonContainer>{menuButtons}</ButtonContainer>
        )}
      </MenuContainer>
      <ButtonContainer2>{menuButtons}</ButtonContainer2>
    </>
  );
};

export default Menu;
