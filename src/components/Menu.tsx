import React, { useEffect, useRef } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

const animationDuration = "200"

const MenuDropDown = styled("div")(({ theme }) => ({
  position: "relative",
  width: "130px",
  borderRadius: "0 0 25px 0",
  background: "#ADD8E6",
  height: "50px",
  display: "flex",
  justifyContent: "Center",
  alignItems: "Center",
  transition: `background ${animationDuration}ms`,
  borderBottom: "1px solid #A0BEC8",
  zIndex: "10",
  "&:hover": {
    background: "#BDDFEB",
    cursor: "pointer"
  }
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  paddingTop: "50px",
  width: "250px",
  zIndex: "-1",
  top: "-400px",
  transition: `all ${animationDuration}ms`,
  "&.show": {
    top: "0"
  },
  "&.displaynone": {
    display: "none"
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
    { buttonName: "Learn About Tarot", urlRedirect: "" },
    { buttonName: "About", urlRedirect: "" },
  ];

  const [showHideAnimating, setShowHideAnimating] = React.useState(false);
  const [buttonContainerClass, setButtonContainerClass] = React.useState("displaynone")

  /*
  This is for properly setting the menu to display none after it animates to hidden.
  We want the menu out of the tab order and effectively off the page when closed.
  CSS animations can't animate the display property, so we have to set display:none AFTER the animation (if we want the animation to work). We do this by adding the displaynone class to the element.
  */
  async function showHideMenuButton() {
    // Don't do anything if there's an animation in progress
    if (showHideAnimating) {
      return;
    }

    const className = buttonContainerClass === "displaynone" ? "show" : "displaynone"
    const animationTime = buttonContainerClass === "displaynone" ? 0 : Number(animationDuration)

    setShowHideAnimating(true);
    //Sleep until the animation is over before adding displaynone! Hopefully we don't make react mad...
    setButtonContainerClass("")
    await new Promise(t => setTimeout(t, animationTime))
    setButtonContainerClass(className)      
    setShowHideAnimating(false);
  };

  const menuButtons = buttonInfo.map(button => {
    return (
      <div key={button.buttonName}>
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

  // Should probably set onBlur too
  return (
    <div style={{ position: "relative", zIndex: "1" }}>
      <MenuDropDown onClick={showHideMenuButton}>
        {buttonContainerClass === "show" ? "Hide" : "Menu"}
      </MenuDropDown> 
      <ButtonContainer className={buttonContainerClass}>{menuButtons}</ButtonContainer>
    </div>
  );
};

export default Menu;
