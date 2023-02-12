import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Apple from "./pages/Apple";
import Tesla from "./pages/Tesla";
import Business from "./pages/Business";
import TechCrunch from "./pages/TechCrunch";
import WallStreetJournal from "./pages/WallStreetJournal";

// import styles
import "./assets/styles/Index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apple" element={<Apple />} />
      <Route path="/tesla" element={<Tesla />} />
      <Route path="/business" element={<Business />} />
      <Route path="/techcrunch" element={<TechCrunch />} />
      <Route path="/wallstreetjournal" element={<WallStreetJournal />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
