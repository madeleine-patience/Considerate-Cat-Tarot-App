import { useState, useEffect } from "react";
import Button from "../components/Button";

let cancer = "virgo";
function HoroscopeRead() {
  const [horoscopeRead, setHoroscopeRead] = useState("");
  const [starSign, setStarSign] = useState("");
  console.log(horoscopeRead);
  useEffect(() => {
    fetch(
      `http://sandipbgt.com/theastrologer/api/horoscope/${starSign}/today/`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setHoroscopeRead(data.horoscope);
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

  const HoroscopeButtons = buttonInfo.map((buttonInfo) => {
    return (
      <Button
        buttonName={buttonInfo.buttonname}
        onClick={() => updateHoroscopeRead(buttonInfo.buttonname)}
      >
        {" "}
      </Button>
    );
  });

  return (
    <>
      {HoroscopeButtons}
      <h1>{horoscopeRead}</h1>
    </>
  );
}

export default HoroscopeRead;
