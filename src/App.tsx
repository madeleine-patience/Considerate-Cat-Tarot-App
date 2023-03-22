import { useState } from "react";
import "./App.css";
import "@fontsource/merriweather";
import TarotRead from "./pages/TarotRead";
import Home from "./pages/Home";
import AllTarotCards from "./pages/AllTarotCards";
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
      <Route path="/AllTarotCards" element={<AllTarotCards />} />
    </Routes>
  );
}
export default App;
