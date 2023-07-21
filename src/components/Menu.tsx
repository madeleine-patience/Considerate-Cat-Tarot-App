import React from "react";
import Button from "../components/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
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

const Menu = () => {
  const navigate = useNavigate();
  const buttonInfo = [
    { buttonName: "Home", urlRedirect: "/" },
    { buttonName: "Get a Tarot Read", urlRedirect: "/tarotRead" },
    { buttonName: "View All Cards", urlRedirect: "/Deck" },
    { buttonName: "View All Cats", urlRedirect: "/CatCatalogue" },
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

  return (
    <>
      <MenuDropDown>
        {" "}
        <div onClick={showHideMenuButton}> {showHide ? "Hide" : "Menu"} </div>
      </MenuDropDown>
      {showHide && <div>{menuButtons}</div>}
    </>
  );
};

export default Menu;
