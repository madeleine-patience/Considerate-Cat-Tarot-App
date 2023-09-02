import { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Button from "../components/Button";
import { styled } from "@mui/system";
import { ItalisizedText } from "../components/StyledElements/ItalisizedText";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import FlowerFooter from "../components/FlowerFooter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

function HoroscopeRead() {
  const ButtonContainer = styled("div")(({ theme }) => ({
    margin: 20,
    justifyItems: "center",
    display: "grid",
    gap: 50,
    minHeight: 600,
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "auto auto auto",
    },
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "auto auto auto auto ",
    },
  }));
  const EntirePage = styled("div")({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "15px",
    minHeight: "100vh",
  });
  const HoroscopeReadingContainer = styled("div")({
    maxWidth: 1000,
    padding: 20,
    marginTop: 20,
    background: "#c9d6a9",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",

    [theme.breakpoints.down("lg")]: {
      width: 800,
    },
    [theme.breakpoints.down("md")]: {
      width: 600,
    },
    [theme.breakpoints.down("sm")]: {
      width: 300,
      justifyContent: "center",
    },
  });
  const ReadingStyling = styled("div")(({ theme }) => ({
    display: "flex",
    gap: 25,

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));
  const CatImageStyling = styled("img")(({ theme }) => ({
    width: "50%",
    background: "#dbb4b2",
    border: "10px solid white",
  }));

  const H2Title = styled("h2")(({ theme }) => ({
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: 60,
  }));
  const TextContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "15px",
    fontFamily: theme.typography.h2.fontFamily,
    fontWeight: 100,
    color: "#575442",
  }));

  const TarotReadButtonContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  }));
  const SuitText = styled("h2")({
    fontSize: "24px",
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
        style={{ boxShadow: "4px 4px 0px 3px rgba(173, 118, 145)" }}
      ></Button>
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
    <ThemeProvider theme={theme}>
      <Menu />
      {!backAndForth && (
        <>
          <EntirePage>
            <ButtonContainer>{HoroscopeButtons} </ButtonContainer>{" "}
          </EntirePage>
          <FlowerFooter />
        </>
      )}
      {backAndForth && (
        <>
          <EntirePage>
            <HoroscopeReadingContainer>
              <Button buttonName="Back" onClick={() => navigateBack()}></Button>

              <ReadingStyling>
                <CatImageStyling src="/Art/Aries.png" />

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
            </HoroscopeReadingContainer>
          </EntirePage>
          <FlowerFooter />
        </>
      )}
    </ThemeProvider>
  );
}

export default HoroscopeRead;
