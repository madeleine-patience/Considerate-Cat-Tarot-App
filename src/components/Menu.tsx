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
  const [showHide, setShowHide]=React.useState(false)
  const showHideMenuButton = ()=>{
  setShowHide(!showHide)
  console.log("Hi madie!")
  }

  const menuButtons = buttonInfo.map((button, index) => {
    return (
      <div>
      <Button
        key={index}
        buttonName={button.buttonName}
        onClick={() => {
          navigate(button.urlRedirect);
        }}
      />
      </div>

    );
  });

  return (
    <div className="fixed right-0 top-64 bg-green-100 rounded-lg ">
      <div className="flex flex-col ">
      
      <div className="w-20 h-8 bg-indigo-200 mx-auto text-center align-middle" onClick={showHideMenuButton}> {showHide? "Hide" : "Menu"} </div>
      {showHide && <div>{menuButtons}</div>}
    </div>
    </div>
  );
};

export default Menu;
