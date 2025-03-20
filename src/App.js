import './App.css';

import React from 'react';
import NavScrollExample from './composants/navbar'
import ResponsiveExample from './accueil/responsive';
import Presentations from './presentation/Presentation';
import Cours from './cours/Cours';
import Tarif from './Tarification/tarification';
import Divider from './divider';
import Contact from './Contact/contact';
import Avis from './avis/avis';
import Calendar from './Calendar/calendar';


function App() {
  return (
    <div className="App">
      <NavScrollExample />
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
      <Divider />
      <Calendar />

    </div>
  );
}

export default App;

