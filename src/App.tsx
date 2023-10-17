import { useState } from "react";
import "./App.css";
import "@fontsource/merriweather";
import TarotRead from "./pages/TarotRead";
import Home from "./pages/Home";
import CatCatalogue from "./pages/CatCatalogue";
import { Deck } from "./pages/Deck";
import HoroscopeRead from "./pages/Horoscope";
import { LearnTarot } from "./pages/LearnTarot";
import AnatomyOfATarotCard from "./pages/AnatomyOfATarotCard";
import TarotReadDirectory from "./pages/TarotReadDirectory";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tarotRead" element={<TarotRead />} />
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/Deck" element={<Deck />} />
      <Route path="/CatCatalogue" element={<CatCatalogue />} />
      <Route path="/Horoscope" element={<HoroscopeRead />} />
      <Route path="/LearnTarot" element={<LearnTarot />} />
      <Route path="/AnatomyOfATarotCard" element={<AnatomyOfATarotCard />} />
      <Route path="/TarotReadDirectory" element={<TarotReadDirectory />} />
    </Routes>
  );
}
export default App;
