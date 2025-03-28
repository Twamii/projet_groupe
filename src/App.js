import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavScrollExample from "./composants/navbar";
import ResponsiveExample from "./accueil/HomePage";
import Presentations from "./presentation/Presentation";
import Cours from "./cours/Cours";
import Tarif from "./Tarification/tarification";
import Divider from "./divider";
import Contact from "./Contact/contact";
import Avis from "./avis/avis";
import Calendar from "./Calendar/calendar";

function App() {
  return (
    <Router>
      <NavScrollExample />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ResponsiveExample />
              <Divider />
              <Presentations />
              <Divider />
              <Cours />
              <Divider />
              <Tarif />
              <Divider />
              <Avis />
              <Divider />
              <Contact />
            </div>
          }
        ></Route>

        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Router>
  );
}

export default App;
