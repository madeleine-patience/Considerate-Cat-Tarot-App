import { useState } from "react";
import "./App.css";
import "@fontsource/merriweather";
import TarotRead from "./pages/TarotRead";
import Home from "./pages/Home";
import CatCatalogue from "./pages/CatCatalogue";
import { Deck } from "./pages/Deck";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tarotRead" element={<TarotRead />} />
      <Route path="/Deck" element={<Deck />} />
      <Route path="/CatCatalogue" element={<CatCatalogue />} />
    </Routes>
  );
}
export default App;
