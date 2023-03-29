import React from "react";
import Button from "../components/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import homepageImage from "/Art/titlePage.jpg";
import Menu from "../components/Menu";

export const Home = () => {
  const navigate = useNavigate();
  const navigateToTarotRead = () => {
    navigate("/tarotRead");
  };

  return (
    <div className="">
      {
        <img
          className=" max-w-5xl mx-auto rounded-lg m-2"
          src={homepageImage}
        />
      }
      <div className=" flex flex-box justify-center">
        <Button buttonName="Enter" onClick={() => navigateToTarotRead()} />
        <Button buttonName="View All Cards" onClick={() => navigate("/Deck")} />
      </div>
      <Menu />
    </div>
  );
};

export default Home;
