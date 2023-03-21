import React from "react";

const [showHide, setShowHide] = React.useState(false);
const [showNumber, setShowNumber] = React.useState(0);

function displayTarotInfo(showValue: boolean, random: number) {
  setShowHide(!showValue);
  setShowNumber(random);
}

export default displayTarotInfo;
