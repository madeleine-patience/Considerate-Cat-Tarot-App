import { useState, useEffect } from "react";
import Button from "../components/Button";

function HoroscopeRead() {
  const [horoscopeRead, setHoroscopeRead] = useState({
    horoscope: null,
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
      >
        {" "}
      </Button>
    );
  });
  return (
    <>
      {HoroscopeButtons}
      <h1>{horoscopeRead.horoscope}</h1>
      <h1>{horoscopeRead.meta.keywords}</h1>
    </>
  );
}

export default HoroscopeRead;
