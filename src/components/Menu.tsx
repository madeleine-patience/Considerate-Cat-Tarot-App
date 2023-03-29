import React from "react";
import Button from "../components/Button";
import { Routes, Route, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const buttonInfo = [
    { buttonName: "Home", urlRedirect: "/" },
    { buttonName: "Get a Tarot Read", urlRedirect: "./tarotRead" },
    { buttonName: "View All Cards", urlRedirect: "./Deck" },
    { buttonName: "View All Cats", urlRedirect: "" },
    { buttonName: "Shop", urlRedirect: "" },
    { buttonName: "Learn About Tarot", urlRedirect: "" },
    { buttonName: "About", urlRedirect: "" },
  ];

  const menuButtons = buttonInfo.map((button, index) => {
    return (
      <Button
        buttonName={button.buttonName}
        onClick={() => {
          navigate(button.urlRedirect);
        }}
      />
    );
  });

  return (
    <div>
      <div>{menuButtons}</div>
    </div>
  );
};

export default Menu;
