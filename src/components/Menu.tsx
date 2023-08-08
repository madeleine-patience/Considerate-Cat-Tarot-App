import React, { useEffect, useRef } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

const MenuDropDown = styled("div")(({ theme }) => ({
  width: "100%",
  height: "75px",
  background: "lightBlue",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "Center",
  fontFamily: "Raleway",
  fontSize: "24px",
  fontWeight: "400",
  padding: "10px",
}));

const H1Title = styled("h1")(({ theme }) => ({
  fontSize: "40px",
  color: "white",
}));
const HeaderImage = styled("img")(({ theme }) => ({
  height: "100%",
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  zIndex: "1",
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
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        key={button.buttonName}
      >
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
    <div style={{ position: "relative" }} ref={ref}>
      <MenuDropDown>
        <HeaderImage src="./Art/EddieHead.png" />
        <H1Title> Considerate Cat </H1Title>

        <div
          style={{ width: "100px", textAlign: "center", color: "white" }}
          onClick={showHideMenuButton}
        >
          {" "}
          {showHide ? "Hide" : "Menu"}{" "}
        </div>
      </MenuDropDown>
      {showHide && <ButtonContainer>{menuButtons}</ButtonContainer>}
    </div>
  );
};

export default Menu;
