// client/pages/home.js
import React from 'react';
import Page from '../app/page'; // Assurez-vous d'importer le composant approprié depuis "app/page.js"

const Home = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <Page /> {/* Utilisez le composant de "app/page.js" ici */}
    </div>
  );
};

export default Home;
