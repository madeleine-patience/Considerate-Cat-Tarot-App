import React, { useEffect, useRef } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

interface eddieObj {
  x: number,
  y: number,
  width: number,
  height: number
}

const animationDuration = "200"

const MenuDropDown = styled("div")(({ theme }) => ({
  position: "relative",
  alignSelf: "left",
  width: "130px",
  borderRadius: "25px",
  textAlign: "center",
  background: "#ADD8E6",
  height: "40px",
  lineHeight: "15px", //cheating
  transition: `background ${animationDuration}ms`,
  borderBottom: "1px solid #A0BEC8",
  zIndex: "10",
  fontFamily: "Yomogi",
  fontSize: "24px",
  fontWeight: "400",
  padding: "10px",
  "&:hover": {
    background: "#BDDFEB",
    cursor: "pointer"
  }
 
}));

const H1Title = styled("h1")(({ theme }) => ({
  fontSize: "35px",
  color: "#000000",
  fontFamily: "Yomogi",
  padding: "0 1.5rem"
}));

const HeaderImage = styled("div")(({ theme }) => ({
  display: "inline-block",
  backgroundImage: "url(./Art/EddieHead.png)",
  backgroundSize: "cover",
  backgroundPosition: "20%",
  borderRadius: "100px",
  filter: "drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.6));",
  height: "80px",
  width: "80px",
  animation: "eddie 2000ms",
  backgroundRepeat: "no-repeat",
  perspective: "100px",
  transformStyle: "preserve-3d",
  transform: "rotate3d(0, 1, 0, 380deg)"
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "600px",
  zIndex: "1",
  left: "calc(50vw - 300px)",
  top: "-400px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  transition: `all ${animationDuration}ms`,
  "&.show": {
    top: "90px"
  },
  "&.displaynone": {
    display: "none"
  },
  "& button": {
    width: "100%"
  }
}));

const MenuContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center"
}));

const TitleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const Menu = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
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
  const [rotatePos, setRotatePos] = React.useState({
    x: 0, 
    y: 0, 
    z: 0, 
    deg: 0, 
    flip: 1,
  })
  let eddiePos: eddieObj = {x: 0, y: 0, width: 0, height: 0}

  //handle eddie
  useEffect(() => {
    function onMouseMove(e: any): void {
      const {x, width} = eddiePos
      const [windowWidth, windowHeight] = windowSize.current
      const targetX = x + (width / 2)
      const maxXTurn: number = 40

      const newRotatePos = {
        x: 0,
        y: 0,
        z: e.clientX > targetX ? -1 : 1,
        deg: ((e.clientX / windowWidth) + (e.clientY / windowHeight)) * maxXTurn,
        flip: e.clientX > targetX ? -1 : 1,
      }

      setRotatePos(newRotatePos)
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

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

  // Should probably set onBlur too
  return (
    <MenuContainer>
      <TitleContainer>
        <HeaderImage
          ref={el => {
            if (!el) return
            eddiePos = (el.getClientRects()[0])            
          }}
          id="eddie" 
          style={{
            transform: `rotate3d(
              ${rotatePos.x}, 
              ${rotatePos.y}, 
              ${rotatePos.z}, 
              -${rotatePos.deg}deg) 
              scaleX(${rotatePos.flip})`
            }}
        />
        <H1Title>Considerate Cat</H1Title>
      </TitleContainer>
      <div style={{ position: "relative", zIndex: "1", display: "flex", alignItems: "center" }}>
        <MenuDropDown onClick={showHideMenuButton} style={{ position: "relative", zIndex: "1" }}>
          {buttonContainerClass === "show" ? "Hide" : "Menu"}
        </MenuDropDown> 
      </div>
      <ButtonContainer className={buttonContainerClass}>{menuButtons}</ButtonContainer>
    </MenuContainer>
  );
};

export default Menu;
