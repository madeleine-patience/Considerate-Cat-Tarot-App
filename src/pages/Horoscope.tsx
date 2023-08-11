import { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Button from "../components/Button";
import { styled } from "@mui/system";
import { H2Title } from "../components/TarotCardDetails";
import { ItalisizedText } from "../components/StyledElements/ItalisizedText";
import { Route, Link, Routes, useNavigate } from "react-router-dom";

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
    gap: "15px",
  }));

  const TarotReadButtonContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  }));
  const SuitText = styled("h2")({
    fontSize: "24px",
  });
  const EntirePage = styled("h2")({
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  });

  const [horoscopeRead, setHoroscopeRead] = useState({
    horoscope: null,
    sunsign: null,
    meta: { keywords: [] },
  });
  const [starSign, setStarSign] = useState("");
  const [todayOrTomorrow, setTodayOrTomorrow] = useState("Today");
  useEffect(() => {
    if (starSign === "") return;
    fetch(
      `http://sandipbgt.com/theastrologer/api/horoscope/${starSign}/${todayOrTomorrow.toLowerCase()}/`,
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
  }, [starSign, todayOrTomorrow]);

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
    setBackAndForth(!backAndForth);
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

  const navigateBack = () => {
    setBackAndForth(!backAndForth);
  };

  const viewTomorrowsHoroscope = () => {
    setTodayOrTomorrow("Tomorrow");
  };
  const viewTodaysHorsocope = () => {
    setTodayOrTomorrow("Today");
  };

  const [backAndForth, setBackAndForth] = useState(false);

  return (
    <>
      <Menu />

      {!backAndForth && <ButtonContainer>{HoroscopeButtons} </ButtonContainer>}
      {backAndForth && (
        <>
          <EntirePage>
            <Button buttonName="Back" onClick={() => navigateBack()}></Button>

            <ReadingStyling>
              <CatImageStyling src="/Cats/71cPGWrOLFL.jpg" />

              <TextContainer>
                <H2Title> {horoscopeRead.sunsign}</H2Title>
                <SuitText> {`${todayOrTomorrow}'s reading`}</SuitText>
                <ItalisizedText>
                  {" "}
                  Key Words : {horoscopeRead.meta.keywords}
                </ItalisizedText>
                <h1>{mainRead}</h1>
              </TextContainer>
            </ReadingStyling>
            <TarotReadButtonContainer>
              <Button
                buttonName="View Today"
                onClick={() => viewTodaysHorsocope()}
              ></Button>
              <Button
                buttonName="View Tomorrow"
                onClick={() => viewTomorrowsHoroscope()}
              ></Button>
            </TarotReadButtonContainer>
          </EntirePage>
        </>
      )}
    </>
  );
}

export default HoroscopeRead;
