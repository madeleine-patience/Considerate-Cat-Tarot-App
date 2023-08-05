import React, { useEffect, useRef } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { styled } from "@mui/system";

const MenuDropDown = styled("div")(({ theme }) => ({
  width: "100%",
  background: "lightBlue",
  height: "50px",
  display: "flex",
  justifyContent: "Center",
  alignItems: "Center",
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
      <div key={uuidv4()}>
        <Button
          buttonName={button.buttonName}
          onClick={() => {
            navigate(button.urlRedirect);
          }}
          style={{ borderRadius: "0", width: "100%" }}
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
        {" "}
        <div onClick={showHideMenuButton}> {showHide ? "Hide" : "Menu"} </div>
      </MenuDropDown>
      {showHide && <ButtonContainer>{menuButtons}</ButtonContainer>}
    </div>
  );
};

export default Menu;
