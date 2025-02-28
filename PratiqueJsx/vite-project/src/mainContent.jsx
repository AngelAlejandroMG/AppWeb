import WelcomeBanner from "./WelcomeBanner";
import Voiture from "./Voiture"; 




function MainContent() {
  
const voitureElems = voitures.map((voiture => {
  return <Voiture
      marque={voiture.marque}
      model={voiture.model}
      couleur={voiture.couleur}
      annee={voiture.annee}
    />
  ;
}))

  return (
    <>
      <WelcomeBanner user={{ name: "Alice", age: 25, city: "Paris" }} />
      <WelcomeBanner user={{ name: "Bob", age: 30, city: "Lyon" }} />
      {voitureElems}
    </>
  );
}

export default MainContent;
