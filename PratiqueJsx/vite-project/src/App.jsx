import './App.css'
import MainContent from './mainContent'
import Voiture from './Voiture'
import voitures from './VoitureListe.js'

const voitureElems = voitures.map((voiture, index) => {
  return (
    <Voiture
     // Adding a unique key for React rendering
      marque={voiture.marque}
      model={voiture.model}
      couleur={voiture.couleur}
      annee={voiture.annee}
    />
  );
});

function App() {

  return (
    <>
      <MainContent/>
    </>
  )
}

export default App
