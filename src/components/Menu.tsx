import React, { useEffect, useRef } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const MenuDropDown = styled("div")(({ theme }) => ({
  width: "100%",
  background: theme.palette.secondary.main,
  display: "flex",
  flexDirection: "column",
  alignItems: "Center",
}));

const H1Title = styled("h1")(() => ({
  fontSize: 50,
  fontFamily: theme.typography.h1.fontFamily,
  color: "white",
  fontWeight: "bold",
}));

const HeaderCenterContent = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
  padding: 5,
}));
const HeaderImage = styled("img")(({ theme }) => ({
  height: 150,
  width: 150,
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  background: "pink",
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
    { buttonName: "Learn About Tarot", urlRedirect: "" },
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
          style={{ borderRadius: "0" }}
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

  return (
    <ThemeProvider theme={theme}>
      <div style={{ position: "relative" }} ref={ref}>
        <MenuDropDown>
          <HeaderCenterContent>
            <HeaderImage src="./Art/EddieHead.png" />
            <H1Title> Considerate Cat </H1Title>
          </HeaderCenterContent>
          <div
            style={{ width: "100px", textAlign: "center", color: "white" }}
            onClick={showHideMenuButton}
          >
            {/* {" "}
            {showHide ? "Hide" : "Menu"}{" "} */}
          </div>
        </MenuDropDown>
        <ButtonContainer>{menuButtons}</ButtonContainer>
      </div>
    </ThemeProvider>
  );
};

export default Menu;
