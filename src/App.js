import './App.css';

import React from 'react';
import NavScrollExample from './composants/navbar'
import ResponsiveExample from './accueil/responsive';
import Presentations from './presentation/Presentation';
import Cours from './cours/Cours';
import Titletarif from './Tarification/titletarif';
import Tarif from './Tarification/tarification';
import Divider from './divider';
import Testimoney from './testimoney/Testimoney';
import Contact from './Contact/contact';


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
      <Titletarif />
      <Tarif />
      <Divider />
      <Testimoney />
      <Divider />
      <Contact />

    </div>
  );
}

export default App;

