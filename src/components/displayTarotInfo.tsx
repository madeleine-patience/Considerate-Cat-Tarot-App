import React from "react";

function useDisplayTarotInfo(cardNumber: number) {
  const [showNumber, setShowNumber] = React.useState(0);
  const [showHide, setShowHide] = React.useState(false);
  function setTarotInfo() {
    setShowHide(!showHide);
    setShowNumber(cardNumber);
  }

  return [showNumber, showHide, setTarotInfo];
}

export default useDisplayTarotInfo;
