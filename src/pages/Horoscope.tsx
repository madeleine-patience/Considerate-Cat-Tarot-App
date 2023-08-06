import { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Button from "../components/Button";
import { styled } from "@mui/system";
import { H2Title } from "../components/TarotCardDetails";

function HoroscopeRead() {
  const ButtonContainer = styled("div")(({ theme }) => ({
    justifyItems: "center",
    display: "grid",
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "auto auto auto",
    },
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "auto auto auto auto ",
    },
  }));

  const ReadingStyling = styled("div")(({ theme }) => ({
    margin: "auto",
    display: "flex",
    width: " 750px",
  }));
  const CatImageStyling = styled("img")(({ theme }) => ({
    width: "400px",
  }));

  const TextContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }));

  const [horoscopeRead, setHoroscopeRead] = useState({
    horoscope: null,
    sunsign: null,
    meta: { keywords: [] },
  });
  const [starSign, setStarSign] = useState("");

  useEffect(() => {
    if (starSign === "") return;
    fetch(
      `http://sandipbgt.com/theastrologer/api/horoscope/${starSign}/today/`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setHoroscopeRead(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [starSign]);

  const buttonInfo = [
    { buttonname: "Aries" },
    { buttonname: "Taurus" },
    { buttonname: "Gemini" },
    { buttonname: "Cancer" },
    { buttonname: "Leo" },
    { buttonname: "Virgo" },
    { buttonname: "Libra" },
    { buttonname: "Scorpio" },
    { buttonname: "Sagittarius" },
    { buttonname: "Capricorn" },
    { buttonname: "Aquarius" },
    { buttonname: "Pisces" },
  ];
  const updateHoroscopeRead = (starSign: string) => {
    setStarSign(starSign.toLowerCase());
  };

  const HoroscopeButtons = buttonInfo.map((buttonInfo, index) => {
    return (
      <Button
        buttonName={buttonInfo.buttonname}
        onClick={() => updateHoroscopeRead(buttonInfo.buttonname)}
        key={buttonInfo.buttonname}
        style={{ margin: "10px" }}
      >
        {" "}
      </Button>
    );
  });
  let mainRead;
  if (horoscopeRead.horoscope) {
    mainRead = (horoscopeRead.horoscope as string).split("(").shift();
  }

  return (
    <>
      <Menu />
      {!horoscopeRead.horoscope && (
        <ButtonContainer>{HoroscopeButtons} </ButtonContainer>
      )}
      {horoscopeRead.horoscope && (
        <ReadingStyling>
          <CatImageStyling src="/Cats/71cPGWrOLFL.jpg" />

          <TextContainer>
            <H2Title> {horoscopeRead.sunsign}</H2Title>

            <h1>{horoscopeRead.meta.keywords}</h1>
            <h1>{mainRead}</h1>
          </TextContainer>
        </ReadingStyling>
      )}
    </>
  );
}

export default HoroscopeRead;
